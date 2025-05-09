/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatReviewBintangPage from './containers/LihatReviewBintangPage'
import TambahReviewBintangPage from './containers/TambahReviewBintangPage'

const reviewBintangRoutes = [
	{ 
		path: "/review/:id_buku/list",
		element: <LihatReviewBintangPage />,
	},
	{ 
		path: "/review/:id_buku/tambah",
		element: <TambahReviewBintangPage />,
	}
]

export default reviewBintangRoutes
