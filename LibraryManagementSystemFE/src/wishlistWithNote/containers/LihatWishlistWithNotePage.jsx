import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import WishlistCard from "../components/WishlistCard";
import getListWishlistWithNote from '../services/getListWishlistWithNote';

const LihatWishlistWithNotePage = () => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({ listWishlistWithNote: false });
  const [listWishlistWithNote, setListWishlistWithNote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({ ...prev, listWishlistWithNote: true }));
        const { data: response } = await getListWishlistWithNote();
        console.log("📦 Raw API response (wishlist with note):", response);

        const rawItems = response.data || [];

        const flattened = rawItems
          .filter(item => item.daftarbukuimpl) // ✅ only process those with data
          .map(item => {
            const book = item.daftarbukuimpl;
            return {
              ...item,
              idBuku: book.idBuku,
              judulBuku: book.judulBuku,
              penulis: book.penulis,
              penerbit: book.penerbit,
              jumlahHalaman: book.jumlahHalaman,
              deskripsiBuku: book.deskripsiBuku,
              genre: book.genre,
              notes: item.notes || "",
            };
          });

        console.log("🧾 Flattened wishlist with note items:", flattened);
        setListWishlistWithNote(flattened);
      } catch (error) {
        console.error("❌ Error fetching wishlist-with-note data:", error);
      } finally {
        setIsLoading(prev => ({ ...prev, listWishlistWithNote: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Lihat Wishlist With Note Page");
  }, [setTitle]);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/wishlist/note/tambah`}>
            <Button className="p-2" variant="primary">
              Tambah Wishlist Note
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <Layouts.ListContainerCardLayout
        title={"List Wishlist With Note"}
        singularName={"Wishlist"}
        items={listWishlistWithNote}
        isLoading={isLoading.listWishlistWithNote}
      >
        <></> {/* ✅ required child to avoid warning */}
      </Layouts.ListContainerCardLayout>

      {listWishlistWithNote.map((item, index) => (
        <WishlistCard key={index} item={item} />
      ))}
    </Layouts.ViewContainerLayout>
  );
};

export default LihatWishlistWithNotePage;
