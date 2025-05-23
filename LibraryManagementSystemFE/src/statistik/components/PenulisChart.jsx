/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PenulisChart = ({ listPenulis,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
    <Layouts.ListComponentPieChartLayout
  	data={listPenulis}
  	itemsAttrs={[
  		{
  			id: "jumlahBuku",
  			condition: "isSource",
  			label: "jumlahBuku",
  			featureName: "invalid",
  		}
  ,
  		{
  			id: "penulis",
  			condition: "isGroupedBy",
  			label: "penulis",
  			featureName: "invalid",
  		}
  ,
  		{
  			id: "namaChart",
  			condition: "isGroupedLabel",
  			label: "namaChart",
  			featureName: "invalid",
  		}
      ]}
    />
  )
};

export default PenulisChart;
