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
import action from '../services/action'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormForm = ({ 
	dataBinding
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanWishlist = (data) => {
    const cleanData = cleanFormData(data)
    action({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/wishlist/status/list`)
  	notifySuccess(`Action berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form" 
		  onSubmit={handleSubmit(simpanWishlist)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="idAkun"
		        name="idAkun"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Simple Field"
		            placeholder="Masukkan simple field"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key=""
	        name=""
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Selection Field"
	            options={[{ id: "Status", name: "Status" },
	            { id: "Judul Buku", name: "Judul Buku" },
	            { id: "Id Buku", name: "Id Buku" }]}
	            placeholder="Masukkan selection field"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Wishlist" type="submit" variant="primary">Simpan Wishlist</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormForm
