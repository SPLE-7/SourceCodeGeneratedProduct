import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import wishlistRoutes from "@/wishlist/routes";
import statistikRoutes from "@/statistik/routes";
import bukuDigitalRoutes from "@/bukuDigital/routes";
import peminjamanRoutes from "@/peminjaman/routes";
import recommendationRoutes from "@/recommendation/routes";
import wishlistWithNoteRoutes from "@/wishlistWithNote/routes";
import renewalRoutes from "@/renewal/routes";
import reviewRoutes from "@/review/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...wishlistRoutes, 
	...statistikRoutes, 
	...bukuDigitalRoutes, 
	...peminjamanRoutes, 
	...recommendationRoutes, 
	...wishlistWithNoteRoutes, 
	...renewalRoutes, 
	...reviewRoutes, 
	...daftarBukuRoutes, 
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
