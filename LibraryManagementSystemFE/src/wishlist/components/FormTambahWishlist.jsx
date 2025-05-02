/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import simpanWishlist from '../services/simpanWishlist'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahWishlist = ({ 
	dataBinding
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanWishlist = (data) => {
    const cleanData = cleanFormData(data)
    simpanWishlist({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/wishlist/list`)
  	notifySuccess(`Simpan Wishlist berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Wishlist" 
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
		            label="Id Akun"
		            placeholder="Masukkan id akun"
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
	            options={[{ id: "Id Buku", name: "Id Buku" },
	            { id: "Judul Buku", name: "Judul Buku" }]}
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

export default FormTambahWishlist
