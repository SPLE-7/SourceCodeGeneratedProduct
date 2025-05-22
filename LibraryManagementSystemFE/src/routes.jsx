import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import wishlistWithNoteRoutes from "@/wishlistWithNote/routes";
import bukuFisikRoutes from "@/bukuFisik/routes";
import renewalRoutes from "@/renewal/routes";
import wishlistRoutes from "@/wishlist/routes";
import peminjamanRoutes from "@/peminjaman/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";
import statistikRoutes from "@/statistik/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...wishlistWithNoteRoutes, 
	...bukuFisikRoutes, 
	...renewalRoutes, 
	...wishlistRoutes, 
	...peminjamanRoutes, 
	...daftarBukuRoutes, 
	...statistikRoutes, 
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
