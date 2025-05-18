import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import WishlistCard from "../components/WishlistCard";
import getDataBindingWishlist from '../services/getDataBindingWishlist';

const LihatWishlistPage = () => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({ listWishlist: false });
  const [dataBindingWishlist, setDataBindingWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({ ...prev, listWishlist: true }));
        const { data: response } = await getDataBindingWishlist();
        console.log("📦 Raw API response:", response);

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
            genre: book.genre
          };
        });

        console.log("🧾 Flattened wishlist items:", flattened);
        setDataBindingWishlist(flattened);
      } catch (error) {
        console.error("❌ Error fetching wishlist data:", error);
      } finally {
        setIsLoading(prev => ({ ...prev, listWishlist: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Lihat Wishlist Page");
  }, [setTitle]);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/wishlist/tambah`}>
            <Button className="p-2" variant="primary">
              Tambah Wishlist
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <Layouts.ListContainerCardLayout
        title={"List Wishlist"}
        singularName={"Wishlist"}
        items={dataBindingWishlist}
        isLoading={isLoading.listWishlist}
      />

      {dataBindingWishlist.map((item, index) => (
        <WishlistCard key={index} item={item} />
      ))}
    </Layouts.ViewContainerLayout>
  );
};

export default LihatWishlistPage;
