import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";
import reviewRoutes from "@/review/routes";
import recommendationRoutes from "@/recommendation/routes";
import statistikRoutes from "@/statistik/routes";
import wishlistRoutes from "@/wishlist/routes";
import peminjamanRoutes from "@/peminjaman/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...daftarBukuRoutes, 
	...reviewRoutes, 
	...recommendationRoutes, 
	...statistikRoutes, 
	...wishlistRoutes, 
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
