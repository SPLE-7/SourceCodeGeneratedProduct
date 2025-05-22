import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import peminjamanRoutes from "@/peminjaman/routes";
import bukuFisikRoutes from "@/bukuFisik/routes";
import wishlistWithStatusRoutes from "@/wishlistWithStatus/routes";
import statistikRoutes from "@/statistik/routes";
import wishlistRoutes from "@/wishlist/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...peminjamanRoutes, 
	...bukuFisikRoutes, 
	...wishlistWithStatusRoutes, 
	...statistikRoutes, 
	...wishlistRoutes, 
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
