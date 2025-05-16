/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
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
import createBuku from "../services/createBuku";

import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahBuku = ({}) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const sImpanBuku = (data) => {
    const cleanData = cleanFormData(data);
    cleanData.jumlahHalaman = parseInt(cleanData.jumlahHalaman);
    createBuku({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/daftarbuku/list`);
        notifySuccess(`Create Buku berhasil!`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Tambah Buku"
        onSubmit={handleSubmit(sImpanBuku)}
        vas={[]}
        formFields={[
          <Controller
            key="judulBuku"
            name="judulBuku"
            control={control}
            rules={{ required: "Harap masukkan judul buku" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Judul Buku"
                placeholder="Masukkan judul buku"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,

          <Controller
            key="penulis"
            name="penulis"
            control={control}
            rules={{ required: "Harap masukkan penulis" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Penulis"
                placeholder="Masukkan penulis"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,

          <Controller
            key="penerbit"
            name="penerbit"
            control={control}
            rules={{ required: "Harap masukkan penerbit" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Penerbit"
                placeholder="Masukkan penerbit"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,

          <Controller
            key="jumlahHalaman"
            name="jumlahHalaman"
            control={control}
            rules={{ required: "Harap masukkan jumlah halaman" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Jumlah Halaman"
                placeholder="Masukkan jumlah halaman"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,

          <Controller
            key="deskripsiBuku"
            name="deskripsiBuku"
            control={control}
            rules={{ required: "Harap masukkan deskripsi buku" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Deskripsi Buku"
                placeholder="Masukkan deskripsi buku"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,

          <Controller
            key="genre"
            name="genre"
            control={control}
            rules={{ required: "Harap masukkan genre" }}
            render={({ field, fieldState }) => (
              <InputField
                label="Genre"
                placeholder="Masukkan genre"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="SImpan Buku" type="submit" variant="primary">
            SImpan Buku
          </Button>,
        ]}
      />
    </div>
  );
};

export default FormTambahBuku;
