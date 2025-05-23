import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from '@/commons/auth';
import WishlistCard from "../components/WishlistCard";
import getDataBindingWishlist from '../services/getDataBindingWishlist';
import deleteWishlist from '../services/deleteWishlist'; 

const LihatWishlistPage = () => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({ listWishlist: false, deleting: false });
  const [dataBindingWishlist, setDataBindingWishlist] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(prev => ({ ...prev, listWishlist: true }));
      const { data: response } = await getDataBindingWishlist();
      console.log("Raw API response:", response); 
      const rawItems = response.data || [];

      const flattened = rawItems.map(item => {
        const book = item.daftarbukuimpl || {};
        return {
          id: item.idWishlist,
          idBuku: book.idBuku,
          judulBuku: book.judulBuku,
          penulis: book.penulis,
          penerbit: book.penerbit,
          jumlahHalaman: book.jumlahHalaman,
          deskripsiBuku: book.deskripsiBuku,
          genre: book.genre
        };
      });

      console.log("Flattened wishlist items:", flattened);
      setDataBindingWishlist(flattened);
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    } finally {
      setIsLoading(prev => ({ ...prev, listWishlist: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Lihat Wishlist Page");
  }, [setTitle]);

  const handleDelete = async (wishlistIdToDelete) => { 
    console.log("Attempting to delete item with idWishlist:", wishlistIdToDelete);
    if (!wishlistIdToDelete) {
      console.error("Deletion failed: idWishlist is undefined or null.");
      alert("Cannot delete item: ID is missing.");
      return;
    }

    try {
      setIsLoading(prev => ({ ...prev, deleting: true }));
      await deleteWishlist(wishlistIdToDelete); 

      setDataBindingWishlist(prevList => prevList.filter(item => item.id !== wishlistIdToDelete));
      console.log(`Item with idWishlist ${wishlistIdToDelete} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
      alert(`Failed to delete wishlist item: ${error.message || 'Unknown error'}. Please try again.`);
    } finally {
      setIsLoading(prev => ({ ...prev, deleting: false }));
    }
  };

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

      {dataBindingWishlist.map((item) => (
        <WishlistCard key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </Layouts.ViewContainerLayout>
  );
};

export default LihatWishlistPage;