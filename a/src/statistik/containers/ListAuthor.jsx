import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router";
import { useAuth } from "@/commons/auth";
import PenulisCard from "../components/PenulisCard";

import getListPenulis from "../services/getListPenulis";

const ListAuthor = (props) => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({
    listPenulis: false,
  });

  const [listPenulis, setListPenulis] = useState([]);
  const [jumlahBuku, setJumlahBuku] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, listPenulis: true }));

        // Fetch listPenulis data
        const response = await getListPenulis();
        const penulisData = response.data;
        console.log("ini banyak buku: ", penulisData.data.length);
        // Set the list and the book count
        console.log(penulisData.data);
        setListPenulis((prev) => listPenulis);
        setJumlahBuku((prev) => penulisData.data.length);
      } catch (error) {
        console.error("Error fetching listPenulis:", error);
      } finally {
        setIsLoading((prev) => ({ ...prev, listPenulis: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTitle("ListAuthor");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.ListContainerCardLayout
        title={"List Penulis"}
        singularName={"Penulis"}
        items={listPenulis}
        isLoading={isLoading.listPenulis}
      >
        <PenulisCard listPenulis={listPenulis} jumlahBuku={jumlahBuku} />
      </Layouts.ListContainerCardLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default ListAuthor;
