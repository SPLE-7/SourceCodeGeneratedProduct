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
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBindingBuku]}
  	
  	itemsAttrs={[
          {
            id: "idBuku",
            condition: "",
            label: "Id Buku",
  		  featureName: "idBuku",
            editable:  false 
          }
  ,
          {
            id: "judulBuku",
            condition: "",
            label: "Judul Buku",
  		  featureName: "judulBuku",
            editable:  false 
          }
  ,
          {
            id: "penulis",
            condition: "",
            label: "Penulis",
  		  featureName: "penulis",
            editable:  false 
          }
  ,
          {
            id: "penerbit",
            condition: "",
            label: "Penerbit",
  		  featureName: "penerbit",
            editable:  false 
          }
  ,
          {
            id: "deskripsiBuku",
            condition: "",
            label: "Deskripsi Buku",
  		  featureName: "deskripsiBuku",
            editable:  false 
          }
  ,
          {
            id: "jumlahHalaman",
            condition: "",
            label: "Jumlah Halaman",
  		  featureName: "jumlahHalaman",
            editable:  false 
          }
  ,
          {
            id: "genre",
            condition: "",
            label: "Genre",
  		  featureName: "genre",
            editable:  false 
          }
  ]}
      itemsEvents={(bukuItem) => [
        <Link to=''>
          <Button
            size="sm"
            variant=
                        "info"
          >
            Hapus
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default BukuCard;
