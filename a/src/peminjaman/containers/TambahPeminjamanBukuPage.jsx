/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useSearchParams } from "react-router";
import FormTambahPeminjaman from "../components/FormTambahPeminjaman";

import getDataBuku from "../services/getDataBuku";
const TambahPeminjamanBukuPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    tambahPeminjaman: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [dataBuku, setDataBuku] = useState();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading((prev) => ({ ...prev, tambahPeminjaman: true }));
      const { data: dataBukuResponse } = await getDataBuku({});
      console.log("ini data buku response: ", dataBukuResponse);

      setDataBuku(dataBukuResponse.data);

      setIsLoading((prev) => ({ ...prev, tambahPeminjaman: false }));
    };
    fetch();
  }, []);

  useEffect(() => {
    setTitle("Tambah Peminjaman Buku Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"Peminjaman"}
        isLoading={isLoading.tambahPeminjaman}
      >
        {dataBuku ? (
          <>
            <FormTambahPeminjaman
              {...{
                dataBuku,
              }}
            />
          </>
        ) : (
          <></>
        )}
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default TambahPeminjamanBukuPage;
