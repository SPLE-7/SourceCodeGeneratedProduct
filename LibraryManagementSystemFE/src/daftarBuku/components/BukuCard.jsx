/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const BukuCard = ({ dataBindingBuku,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:7777/call/buku/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idBuku: id,
        }),
      });

      if (response.ok) {
        console.log(`Successfully deleted book with id: ${id}`);
        // Refresh logic here, e.g., reload the page or update state
        window.location.reload();
      } else {
        console.error(`Failed to delete book with id: ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting book with id: ${id}`, error);
    }
  };

  return (
    <Layouts.ListComponentCardLayout
      items={[dataBindingBuku]}
      itemsAttrs={[
        {
          id: "idBuku",
          condition: "",
          label: "Id Buku",
          featureName: "idBuku",
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
          id: "penulis",
          condition: "",
          label: "Penulis",
          featureName: "penulis",
          editable: false,
        },
        {
          id: "penerbit",
          condition: "",
          label: "Penerbit",
          featureName: "penerbit",
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
          id: "jumlahHalaman",
          condition: "",
          label: "Jumlah Halaman",
          featureName: "jumlahHalaman",
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
      itemsEvents={(bukuItem) => [
        <Link to="">
          <Button
            onClick={() => handleDeleteBook(bukuItem.idBuku)}
            size="sm"
            variant="info"
          >
            Hapus
          </Button>
        </Link>,
      ]}
    />
  );
};

export default BukuCard;
