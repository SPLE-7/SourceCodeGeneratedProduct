/*
	Generated on 17/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatWishlistPage from './containers/LihatWishlistPage'
import TambahWishlistPage from './containers/TambahWishlistPage'
import ConfirmDeleteWishlist from './containers/ConfirmDeleteWishlist'

const wishlistRoutes = [
{ 
	path: "/wishlist/list",
	element: <LihatWishlistPage />,
}

	
,
{ 
	path: "/wishlist/tambah",
	element: <TambahWishlistPage />,
}

	
,

	

]

export default wishlistRoutes
