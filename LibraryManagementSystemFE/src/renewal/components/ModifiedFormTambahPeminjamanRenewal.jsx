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
import createRenewal from '../services/createRenewal'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahPeminjamanRenewal = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const simpanRenewal = (data) => {
    const cleanData = cleanFormData(data)
    createRenewal({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/peminjaman/renewal/list`)
  	notifySuccess(`Create Renewal berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Peminjaman Renewal" 
		  onSubmit={handleSubmit(simpanRenewal)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="renewalCount"
		        name="renewalCount"
		        control={control}
				rules={{ required: "Harap masukkan renewal count" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Renewal Count"
		            placeholder="Masukkan renewal count"
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
				<Button key="Simpan Renewal" type="submit" variant="primary">Simpan Renewal</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormTambahPeminjamanRenewal
