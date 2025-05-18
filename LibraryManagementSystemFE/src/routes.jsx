import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";
import wishlistWithNoteRoutes from "@/wishlistWithNote/routes";
import reviewRoutes from "@/review/routes";
import recommendationRoutes from "@/recommendation/routes";
import statistikRoutes from "@/statistik/routes";
import wishlistRoutes from "@/wishlist/routes";
import renewalRoutes from "@/renewal/routes";
import peminjamanRoutes from "@/peminjaman/routes";
import bukuDigitalRoutes from "@/bukuDigital/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...daftarBukuRoutes, 
	...wishlistWithNoteRoutes, 
	...reviewRoutes, 
	...recommendationRoutes, 
	...statistikRoutes, 
	...wishlistRoutes, 
	...renewalRoutes, 
	...peminjamanRoutes, 
	...bukuDigitalRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
