/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PeminjamanCard = ({ dataBindingPeminjaman,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBindingPeminjaman]}
  	
  	itemsAttrs={[
          {
            id: "idPeminjamanBuku",
            condition: "",
            label: "Id Peminjaman Buku",
  		  featureName: "idPeminjamanBuku",
            editable:  false 
          }
  ,
          {
            id: "statusPeminjaman",
            condition: "",
            label: "Status Peminjaman",
  		  featureName: "",
            editable:  false 
          }
  ,
          {
            id: "judulBuku",
            condition: "",
            label: "Judul Buku",
  		  featureName: "",
            editable:  false 
          }
  ]}
      itemsEvents={(peminjamanItem) => [
  	]}
    />
  )	
};

export default PeminjamanCard;
