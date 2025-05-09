/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatWishlistWithNotePage from './containers/LihatWishlistWithNotePage'
import AddWishlistWithNotePage from './containers/AddWishlistWithNotePage'

const wishlistWithNoteRoutes = [
	{ 
		path: "/wishlist/note/list",
		element: <LihatWishlistWithNotePage />,
	},
	{ 
		path: "/wishlist/notes/add",
		element: <AddWishlistWithNotePage />,
	}
]

export default wishlistWithNoteRoutes
