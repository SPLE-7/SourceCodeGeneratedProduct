/*
	Generated on 21/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PeminjamanCard = ({ listPeminjamanRenewal,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listPeminjamanRenewal]}
  	
  	itemsAttrs={[
          {
            id: "renewalCount",
            condition: "",
            label: "Renewal Count",
  		  featureName: "renewalCount",
            editable:  false 
          }
  ]}
      itemsEvents={(peminjamanItem) => [
  	]}
    />
  )	
};

export default PeminjamanCard;
