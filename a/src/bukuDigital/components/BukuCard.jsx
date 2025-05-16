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

const BukuCard = ({ listBukuDigital,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listBukuDigital]}
  	
  	itemsAttrs={[
          {
            id: "linkBuku",
            condition: "",
            label: "Link Buku",
  		  featureName: "linkBuku",
            editable:  false 
          }
  ]}
      itemsEvents={(bukuItem) => [
        
        
  	]}
    />
  )	
};

export default BukuCard;
