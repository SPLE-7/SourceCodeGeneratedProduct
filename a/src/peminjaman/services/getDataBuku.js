import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getDataBuku = async (params = {}) => {
  console.log("AAAAAA");
  try {
    // Retrieve the token
    const { getToken } = tokenManager();
    const token = getToken();
    console.log("token", token);

    // Merge parameters
    const paramsGet = { ...params, token };
    console.log("[getDataBuku] Request Parameters:", paramsGet);

    // Construct the URL
    const url = `http://localhost:8944/call/buku/list`;

    console.log("[getDataBuku] Request URL:", url);

    // Send the request
    const response = await axios.get(url, {
      params: paramsGet,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Log the successful response
    console.log("[getDataBuku] Response:", response);

    // Return the actual data, not the full response object
    return response.data;
  } catch (error) {
    // Log detailed error information
    if (error.response) {
      console.error("[getDataBuku] API Error:", {
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers,
        data: error.response.data,
      });
      notifyError({
        status: error.response.status,
        message:
          error.response.data.message ||
          "An error occurred while fetching book data.",
      });
    } else if (error.request) {
      console.error("[getDataBuku] Network Error:", error.request);
      notifyError({
        status: 503,
        message:
          "No response received from the server. Please check your connection.",
      });
    } else {
      console.error("[getDataBuku] Unexpected Error:", error.message);
      notifyError({
        status: 500,
        message: error.message || "An unexpected error occurred.",
      });
    }

    // Return an empty object to prevent downstream errors
    return {};
  }
};

export default getDataBuku;
