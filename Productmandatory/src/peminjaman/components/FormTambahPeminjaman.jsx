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
import createPeminjaman from '../services/createPeminjaman'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahPeminjaman = ({ 
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpanPeminjamanBuku = (data) => {
    const cleanData = cleanFormData(data)
    createPeminjaman({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/peminjaman/list`)
  	notifySuccess(`Create Peminjaman berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Peminjaman" 
		  onSubmit={handleSubmit(simpanPeminjamanBuku)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="idAkun"
		        name="idAkun"
		        control={control}
				rules={{ required: "Harap masukkan id akun" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Id Akun"
		            placeholder="Masukkan id akun"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="idBuku"
		        name="idBuku"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="ID Buku"
		            placeholder="Masukkan id buku"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="status"
		        name="status"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Status"
		            placeholder="Masukkan status"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tanggalPeminjaman"
		        name="tanggalPeminjaman"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Peminjaman"
		            placeholder="Masukkan tanggal peminjaman"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tanggalPengembalian"
		        name="tanggalPengembalian"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Pengembalian"
		            placeholder="Masukkan tanggal pengembalian"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan Peminjaman Buku" type="submit" variant="primary">Simpan Peminjaman Buku</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormTambahPeminjaman
