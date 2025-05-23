/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
import addedAction from '../services/addedAction'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormTambahReviewKomentar = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanReviewKomentar = (data) => {
    const cleanData = cleanFormData(data)
    addedAction({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/review/${id_buku/list}`)
  	notifySuccess(`AddedAction berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Tambah Review Komentar" 
		  onSubmit={handleSubmit(simpanReviewKomentar)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="komentar"
		        name="komentar"
		        control={control}
				rules={{ required: "Harap masukkan isi komentar" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Isi Komentar"
		            placeholder="Masukkan isi komentar"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Review Komentar" type="submit" variant="primary">Simpan Review Komentar</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormFormTambahReviewKomentar
