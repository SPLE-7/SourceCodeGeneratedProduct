import React from 'react';
import { Button } from '@/commons/components';

const WishlistCard = ({ item }) => {
  if (!item || !item.judulBuku) return null;

  return (
    <div className="wishlist-card p-4 mb-4 border rounded shadow-sm">
      <h3 className="text-lg font-bold">{item.judulBuku}</h3>
      <p><strong>Penulis:</strong> {item.penulis}</p>
      <p><strong>Penerbit:</strong> {item.penerbit}</p>
      <p><strong>Jumlah Halaman:</strong> {item.jumlahHalaman}</p>
      <p><strong>Deskripsi:</strong> {item.deskripsiBuku}</p>
      <p><strong>Genre:</strong> {item.genre}</p>
      <p><strong>Catatan:</strong> {item.notes}</p>

      <div className="mt-2">
        <Button size="sm" variant="neutral">Hapus</Button> {/* ✅ valid variant */}
      </div>
    </div>
  );
};

export default WishlistCard;
