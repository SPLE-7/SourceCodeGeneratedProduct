import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";
import wishlistRoutes from "@/wishlist/routes";
import reviewRoutes from "@/review/routes";
import wishlistWithNoteRoutes from "@/wishlistWithNote/routes";
import renewalRoutes from "@/renewal/routes";
import bukuFisikRoutes from "@/bukuFisik/routes";
import statistikRoutes from "@/statistik/routes";
import peminjamanRoutes from "@/peminjaman/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...daftarBukuRoutes, 
	...wishlistRoutes, 
	...reviewRoutes, 
	...wishlistWithNoteRoutes, 
	...renewalRoutes, 
	...bukuFisikRoutes, 
	...statistikRoutes, 
	...peminjamanRoutes, 
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
