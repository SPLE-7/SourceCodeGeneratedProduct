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
import createWishlistStatus from '../services/createWishlistStatus'; 

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts"; 

const ModifiedFormAddWishlistWithStatus = () => {
  const {
    control,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const simpanWishlistStatus = (data) => {
    const cleanData = cleanFormData(data);
    console.log("Submitting data:", cleanData); 

    createWishlistStatus({
        ...cleanData, 
        id: cleanData.idAkun,
    })
        .then(({ data: responseData }) => { 
            console.log("API response:", responseData); 
            navigate(`/wishlist/status/list`); 
            notifySuccess(`Create Wishlist Status berhasil!`);
        })
        .catch((error) => {
            console.error("Error creating wishlist status:", error);

            let errorMessage = "Failed to create wishlist status.";
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
            notifyError(errorMessage);
        });
  };

  return (
    <div>
      <Layouts.FormComponentLayout
          title="Add Wishlist With Status"
          onSubmit={handleSubmit(simpanWishlistStatus)}
          id_name="addWishlistStatusForm" 
          vas={[
          ]}
          formFields={[
              <Controller
                key="wishlistIdBuku" 
                name="idBuku" 
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="ID Buku" 
                    placeholder="Masukkan ID Buku"
                    fieldState={fieldState} 
                    {...field}
                    isRequired={false} 
                  />
                )}
              />,
              <Controller
                key="wishlistIdAkun" 
                name="idAkun" 
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="ID Akun" 
                    placeholder="Masukkan ID Akun"
                    fieldState={fieldState} 
                    {...field}
                    isRequired={false} 
                  />
                )}
              />,
              <Controller
                key="wishlistStatus" 
                name="status"
                control={control}
                render={({ field, fieldState }) => (
                  <InputField
                    label="Status" 
                    placeholder="Masukkan status (e.g., pending, completed)"
                    fieldState={fieldState} 
                    {...field}
                    isRequired={false} 
                  />
                )}
              />,
          ]}
          itemsEvents={[
                <Button key="simpanWishlistStatusButton" type="submit" variant="primary">Simpan Wishlist Status</Button>
          ]}
      />
    </div>
  );
};

export default ModifiedFormAddWishlistWithStatus;