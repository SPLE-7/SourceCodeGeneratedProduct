/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatReviewPage from './containers/LihatReviewPage'
import TambahReviewPage from './containers/TambahReviewPage'

const reviewRoutes = [
{ 
	path: "/review/:id_buku/list",
	element: <LihatReviewPage />,
}

	
,
{ 
	path: "/review/:id_buku/tambah",
	element: <TambahReviewPage />,
}

	

]

export default reviewRoutes
