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
import createReview from '../services/createReview'

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
    createReview({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(``)
  	notifySuccess(`Create Review berhasil!`);
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
			    key="score"
		        name="score"
		        control={control}
				rules={{ required: "Harap masukkan score" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Score"
		            placeholder="Masukkan score"
		            defaultValue={dataBuku.score}	            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key=""
	        name=""
	        control={control}
			rules={{ required: "Harap pilih judul buku" }} 
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Judul Buku"
	            options={[{ id: "Id Buku", name: "Id Buku" },
	            { id: "Judul Buku", name: "Judul Buku" }]}
	            placeholder="Masukkan judul buku"
					fieldState={fieldState}
					defaultValue={dataBuku.}
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
