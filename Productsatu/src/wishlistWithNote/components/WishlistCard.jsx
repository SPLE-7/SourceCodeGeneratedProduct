/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const WishlistCard = ({ listWishlistWithNote }) => {
  const { checkPermission } = useAuth();

  const getBukuNested = (items) => {
    return items.map((item) => {
      return {
        ...item,
        judulBuku: item.daftarbukuimpl
          ? item.daftarbukuimpl.judulBuku
          : "No Title",
        deskripsiBuku: item.daftarbukuimpl
          ? item.daftarbukuimpl.deskripsiBuku
          : "No Description",
        genre: item.daftarbukuimpl ? item.daftarbukuimpl.genre : "No Genre",
      };
    });
  };

  return (
    <Layouts.ListComponentCardLayout
      items={[getBukuNested(listWishlistWithNote)]}
      itemsAttrs={[
        {
          id: "notes",
          condition: "",
          label: "notes",
          featureName: "notes",
          editable: false,
        },
        {
          id: "judulBuku",
          condition: "",
          label: "Judul Buku",
          featureName: "judulBuku",
          editable: false,
        },
        {
          id: "deskripsiBuku",
          condition: "",
          label: "Deskripsi Buku",
          featureName: "deskripsiBuku",
          editable: false,
        },
        {
          id: "genre",
          condition: "",
          label: "Genre",
          featureName: "genre",
          editable: false,
        },
      ]}
      itemsEvents={(wishlistItem) => []}
    />
  );
};

export default WishlistCard;
