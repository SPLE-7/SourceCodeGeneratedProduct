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
import PenulisChart from "../components/PenulisChart";

import getListPenulis from "../services/getListPenulis";

const ListAuthor = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    chartPenulis: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [listPenulis, setListPenulis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, chartPenulis: true }));
        const response = await getListPenulis();

        // Extract the array correctly
        const books = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];

        // Process the data to count books per genre
        const groupedData = books.reduce((acc, item) => {
          const genre = item.genre;
          const penulis = item.penulis;

          const existingGroup = acc.find((entry) => entry.genre === genre);

          if (existingGroup) {
            // Increment the book count for the existing genre
            existingGroup.bookCount += 1;
          } else {
            // Create a new group for this genre
            acc.push({
              genre: genre,
              penulis: penulis,
              bookCount: 1,
            });
          }

          return acc;
        }, []);

        // console.log("Processed grouped data:", groupedData);
        setListPenulis(groupedData);
      } finally {
        setIsLoading((prev) => ({ ...prev, chartPenulis: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("ListAuthor");
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
        title={"Chart Penulis"}
        isLoading={isLoading.chartPenulis}
      >
        <PenulisChart listPenulis={listPenulis} />
      </Layouts.ListContainerChartLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ListAuthor;
