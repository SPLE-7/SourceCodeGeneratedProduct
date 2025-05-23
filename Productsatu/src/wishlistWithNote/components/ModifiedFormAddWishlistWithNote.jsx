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
import createWishlistNote from "../services/createWishlistNote";

import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddWishlistWithNote = ({}) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const simpanWishlistNote = (data) => {
    const cleanData = cleanFormData(data);
    createWishlistNote({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/wishlist/note/list`);
        notifySuccess(`Create Wishlist Note berhasil!`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add Wishlist With Note "
        onSubmit={handleSubmit(simpanWishlistNote)}
        vas={[]}
        formFields={[
          <Controller
            key="idBuku"
            name="idBuku"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Id Buku"
                placeholder="Masukkan id buku"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,

          <Controller
            key="id"
            name="id"
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
          />,

          <Controller
            key="notes"
            name="notes"
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
          />,
        ]}
        itemsEvents={[
          <Button key="Simpan Wishlist Note" type="submit" variant="primary">
            Simpan Wishlist Note
          </Button>,
        ]}
      />
    </div>
  );
};

export default ModifiedFormAddWishlistWithNote;
