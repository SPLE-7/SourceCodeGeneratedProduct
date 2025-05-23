export default import.meta.env.MODE === "production"
  ? {
      production: true,
      rootApi: import.meta.env.VITE_BACKEND_URL,
      staticServerApi: `/static`,
    }
  : {
      production: false,
      rootApi: `http://localhost:7776/`,
      staticServerApi: `/static`,
    };
