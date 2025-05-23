/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const WishlistCard = ({ listWishlistWithStatus,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listWishlistWithStatus]}
  	
  	itemsAttrs={[
          {
            id: "status",
            condition: "",
            label: "Status",
  		  featureName: "status",
            editable: false
          }
  ]}
      itemsEvents={(wishlistItem) => [
  	]}
    />
  )	
};

export default WishlistCard;
