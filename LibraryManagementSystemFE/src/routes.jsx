import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import statistikRoutes from "@/statistik/routes";
import wishlistRoutes from "@/wishlist/routes";
import recommendationRoutes from "@/recommendation/routes";
import daftarBukuRoutes from "@/daftarBuku/routes";
import authorStatistikRoutes from "@/authorStatistik/routes";
import wishlistWithNoteRoutes from "@/wishlistWithNote/routes";
import reviewKomentarRoutes from "@/reviewKomentar/routes";
import renewalRoutes from "@/renewal/routes";
import authorRecommendationRoutes from "@/authorRecommendation/routes";
import reviewRoutes from "@/review/routes";
import bukuFisikRoutes from "@/bukuFisik/routes";
import peminjamanRoutes from "@/peminjaman/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...statistikRoutes, 
	...wishlistRoutes, 
	...recommendationRoutes, 
	...daftarBukuRoutes, 
	...authorStatistikRoutes, 
	...wishlistWithNoteRoutes, 
	...reviewKomentarRoutes, 
	...renewalRoutes, 
	...authorRecommendationRoutes, 
	...reviewRoutes, 
	...bukuFisikRoutes, 
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
