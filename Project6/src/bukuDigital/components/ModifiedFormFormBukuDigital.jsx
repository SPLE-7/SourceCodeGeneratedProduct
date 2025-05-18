/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
import createBukuDigital from '../services/createBukuDigital'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormBukuDigital = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanBukuDigital = (data) => {
    const cleanData = cleanFormData(data)
    createBukuDigital({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/daftarbuku/digital/list`)
  	notifySuccess(`Create Buku Digital berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form Buku Digital" 
		  onSubmit={handleSubmit(simpanBukuDigital)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="linkBuku"
		        name="linkBuku"
		        control={control}
				rules={{ required: "Harap masukkan link buku" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Link Buku"
		            placeholder="Masukkan link buku"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Buku Digital" type="submit" variant="primary">Simpan Buku Digital</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormFormBukuDigital
