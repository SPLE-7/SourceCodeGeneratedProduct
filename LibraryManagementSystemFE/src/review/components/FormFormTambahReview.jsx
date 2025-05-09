/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
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
import simpanReview from '../services/simpanReview'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormTambahReview = ({ 
	dataBuku
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataBuku })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanReview = (data) => {
    const cleanData = cleanFormData(data)
    simpanReview({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(``)
  	notifySuccess(`Simpan Review berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Tambah Review" 
		  onSubmit={handleSubmit(simpanReview)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="judulBuku"
	        name="judulBuku"
	        control={control}
			rules={{ required: "Harap pilih judul buku" }} 
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Judul Buku"
	            options={idBuku}
	            placeholder="Masukkan judul buku"
					fieldState={fieldState}
					defaultValue={dataBuku.judulBuku}
	            {...field}
					isRequired={true}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Review" type="submit" variant="primary">Simpan Review</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormFormTambahReview
