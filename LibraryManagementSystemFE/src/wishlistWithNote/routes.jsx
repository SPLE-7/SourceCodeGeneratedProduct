/*
	Generated on 17/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatWishlistWithNotePage from './containers/LihatWishlistWithNotePage'
import TambahWishlistWithNotePage from './containers/TambahWishlistWithNotePage'

const wishlistWithNoteRoutes = [
	{ 
		path: "/wishlist/note/list",
		element: <LihatWishlistWithNotePage />,
	},
	{ 
		path: "/wishlist/note/tambah",
		element: <TambahWishlistWithNotePage />,
	}
]

export default wishlistWithNoteRoutes
