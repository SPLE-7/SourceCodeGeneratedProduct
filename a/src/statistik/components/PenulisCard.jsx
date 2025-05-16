import React from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";
import * as Layouts from "@/commons/layouts";

const PenulisCard = ({ listPenulis, jumlahBuku }) => {
  const { checkPermission } = useAuth();

  console.log("List penulis", listPenulis);
  console.log("Jumlah Buku:", jumlahBuku);

  return (
    <Layouts.ListComponentCardLayout
      items={listPenulis}
      itemsAttrs={[
        {
          id: "jumlahBuku",
          condition: "isSource",
          label: "Jumlah Buku",
          featureName: jumlahBuku.toString(), // Use the actual count here
          editable: false,
        },
        {
          id: "penulis",
          condition: "isGroupedBy",
          label: "penulis",
          featureName: "penulis",
          editable: false,
        },
        {
          id: "namaChart",
          condition: "isGroupedLabel",
          label: "namaChart",
          featureName: "deskripsi",
          editable: false,
        },
      ]}
      itemsEvents={(penulisItem) => []}
    />
  );
};

export default PenulisCard;
