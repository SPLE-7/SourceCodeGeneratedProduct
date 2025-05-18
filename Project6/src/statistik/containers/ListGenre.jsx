/*
	Generated on 17/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router";
import { useAuth } from "@/commons/auth";
import GenreChart from "../components/GenreChart";

import getListGenre from "../services/getListGenre";

const ListGenre = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    chartGenre: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [listGenre, setListGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, chartGenre: true }));
        const response = await getListGenre();
        console.log("Response from getListGenre di ListGenre.jsx:", response);
        // Extract the array correctly
        const genres = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];

        // Process the data to count books per genre
        const groupedData = genres.reduce((acc, item) => {
          const genre = item.genre || "Unknown";

          const existingGroup = acc.find((entry) => entry.genre === genre);

          if (existingGroup) {
            // Increment the book count for the existing genre
            existingGroup.bookCount += 1;
          } else {
            // Create a new group for this genre
            acc.push({
              genre: genre,
              bookCount: 1,
            });
          }

          return acc;
        }, []);

        console.log("Processed grouped data:", groupedData);
        setListGenre(groupedData);
      } finally {
        setIsLoading((prev) => ({ ...prev, chartGenre: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("ListGenre");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.ListContainerChartLayout
        title={"Chart Genre"}
        isLoading={isLoading.chartGenre}
      >
        <GenreChart listGenre={listGenre} />
      </Layouts.ListContainerChartLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ListGenre;
