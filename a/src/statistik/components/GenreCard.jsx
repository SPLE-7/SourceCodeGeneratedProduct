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

const GenreCard = ({ listGenre,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listGenre]}
  	
  	itemsAttrs={[
          {
            id: "jumlahBuku",
            condition: "isSource",
            label: "jumlahBuku",
  		  featureName: "invalid",
            editable:  false 
          }
  ,
          {
            id: "genre",
            condition: "isGroupedBy",
            label: "genre",
  		  featureName: "invalid",
            editable:  false 
          }
  ,
          {
            id: "namaChart",
            condition: "isGroupedLabel",
            label: "namaChart",
  		  featureName: "invalid",
            editable:  false 
          }
  ]}
      itemsEvents={(genreItem) => [
  	]}
    />
  )	
};

export default GenreCard;
