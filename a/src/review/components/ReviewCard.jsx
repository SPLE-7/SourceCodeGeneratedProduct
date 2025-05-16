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

const ReviewCard = ({ detailReview,
	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[detailReview]}
  	
  	itemsAttrs={[
          {
            id: "idReview",
            condition: "",
            label: "Id Review",
  		  featureName: "idReview",
            editable:  false 
          }
  ,
          {
            id: "tanggalReview",
            condition: "",
            label: "Tanggal Review",
  		  featureName: "postedAt",
            editable:  false 
          }
  ]}
      itemsEvents={(reviewItem) => [
  	]}
    />
  )	
};

export default ReviewCard;
