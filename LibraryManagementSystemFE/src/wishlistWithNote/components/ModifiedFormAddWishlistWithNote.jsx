/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
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
import createWishlistNote from '../services/createWishlistNote'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddWishlistWithNote = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const simpanWishlistNote = (data) => {
    const cleanData = cleanFormData(data)
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Wishlist With Note " 
		  onSubmit={handleSubmit(simpanWishlistNote)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="idBuku"
		            placeholder="Masukkan idbuku"
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
				  <InputField
		            label="notes"
		            placeholder="Masukkan notes"
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
				
	            label="idAkun"
	            options={idAkun}
	            optionLabel="invalid"
	            placeholder="Masukkan idakun"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Wishlist Note" type="submit" variant="primary">Simpan Wishlist Note</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddWishlistWithNote
