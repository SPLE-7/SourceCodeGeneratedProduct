/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatReviewKomentarPage from './containers/LihatReviewKomentarPage'
import TambahReviewKomentarPage from './containers/TambahReviewKomentarPage'

const reviewKomentarRoutes = [
	{ 
		path: "/review/:id_buku/list",
		element: <LihatReviewKomentarPage />,
	},
	{ 
		path: "/review/:id_buku/tambah",
		element: <TambahReviewKomentarPage />,
	}
]

export default reviewKomentarRoutes
