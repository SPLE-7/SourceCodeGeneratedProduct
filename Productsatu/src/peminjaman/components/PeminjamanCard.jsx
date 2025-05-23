/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { data, Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PeminjamanCard = ({ dataBindingPeminjaman,
	}) => {
  const { checkPermission } = useAuth();

  const getJudulBukuNested = (items) => {
    return items.map((item) => {
      return {
        ...item,
        judulBuku: item.daftarbukuimpl ? item.daftarbukuimpl.judulBuku : 'No Title',
      };
    });
  }
  
  return (
    <Layouts.ListComponentCardLayout
      items={[getJudulBukuNested(dataBindingPeminjaman)]}
  	
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
            id: "status",
            condition: "",
            label: "status",
  		  featureName: "status",
            editable:  false 
          }
  ,
          {
            id: "judulBuku",
            condition: "",
            label: "judulBuku",
  		  featureName: "judulBuku",
            editable:  false 
          }
  ,
  {
    id: "tanggalPeminjaman",
    condition: "",
    label: "Tanggal Peminjaman",
    featureName: "tanggalPeminjaman",
    editable: false 
  },
  {
    id: "tanggalPengembalian",
    condition: "",
    label: "Tanggal Pengembalian",
    featureName: "tanggalPengembalian",
    editable: false 
  },
  ]}
      itemsEvents={(peminjamanItem) => [
  	]}
    />
  )	
};

export default PeminjamanCard;
