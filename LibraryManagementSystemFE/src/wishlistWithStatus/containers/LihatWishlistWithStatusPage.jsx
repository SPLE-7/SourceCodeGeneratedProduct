import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import WishlistCard from "../components/WishlistCard";
import getListWishlistWithStatus from '../services/getListWishlistWithStatus';

const LihatWishlistWithStatusPage = () => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({ listWishlistWithStatus: false });
  const [dataBindingWishlistStatus, setDataBindingWishlistStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({ ...prev, listWishlistWithStatus: true }));
        const { data: response } = await getListWishlistWithStatus();
        console.log("Raw status response:", response);

        const rawItems = response.data || [];

        const flattened = rawItems.map(item => {
          const book = item.daftarbukuimpl || {};
          return {
            ...item,
            idBuku: book.idBuku,
            judulBuku: book.judulBuku,
            penulis: book.penulis,
            penerbit: book.penerbit,
            jumlahHalaman: book.jumlahHalaman,
            deskripsiBuku: book.deskripsiBuku,
            genre: book.genre,
            status: item.status || "unknown"
          };
        });

        console.log("Flattened wishlist status items:", flattened);
        setDataBindingWishlistStatus(flattened);
      } catch (error) {
        console.error("Error fetching wishlist with status data:", error);
      } finally {
        setIsLoading(prev => ({ ...prev, listWishlistWithStatus: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Lihat Wishlist With Status Page");
  }, [setTitle]);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/wishlist/status/add`}>
            <Button className="p-2" variant="primary">
              Tambah Wishlist Status
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <Layouts.ListContainerCardLayout
        title={"List Wishlist With Status"}
        singularName={"Wishlist"}
        items={dataBindingWishlistStatus}
        isLoading={isLoading.listWishlistWithStatus}
      />

      {dataBindingWishlistStatus.map((item, index) => (
        <WishlistCard key={index} item={item} />
      ))}
    </Layouts.ViewContainerLayout>
  );
};

export default LihatWishlistWithStatusPage;
