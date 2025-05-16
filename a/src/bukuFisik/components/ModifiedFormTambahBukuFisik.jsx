/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import createBukuFisik from '../services/createBukuFisik'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahBukuFisik = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanBukuFisik = (data) => {
    const cleanData = cleanFormData(data)
    createBukuFisik({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/daftarbuku/fisik/list`)
  	notifySuccess(`Create Buku Fisik berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Buku Fisik" 
		  onSubmit={handleSubmit(simpanBukuFisik)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="jumlahBuku"
		        name="jumlahBuku"
		        control={control}
				rules={{ required: "Harap masukkan jumlah buku" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jumlah Buku"
		            placeholder="Masukkan jumlah buku"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Buku Fisik" type="submit" variant="primary">Simpan Buku Fisik</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormTambahBukuFisik
