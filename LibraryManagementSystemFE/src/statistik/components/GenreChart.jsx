/*
	Generated on 17/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from "react";
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { useAuth } from "@/commons/auth";
import { Button, Modal, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";

const GenreChart = ({ listGenre }) => {
  const { checkPermission } = useAuth();
  console.log("genrechart.jsx List genre", listGenre);

  return (
    <Layouts.ListComponentPieChartLayout
      data={listGenre}
      itemsAttrs={[
        {
          id: "bookCount",
          condition: "isSource",
          label: "Book Count",
          featureName: "bookCount",
        },
        {
          id: "genre",
          condition: "isGroupedBy",
          label: "Genre",
          featureName: "genre",
        },
      ]}
    />
  );
};

export default GenreChart;