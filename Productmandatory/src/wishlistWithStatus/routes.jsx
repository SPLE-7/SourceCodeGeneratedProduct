/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatWishlistWithStatusPage from './containers/LihatWishlistWithStatusPage'
import AddWishlistWithStatusPage from './containers/AddWishlistWithStatusPage'

const wishlistWithStatusRoutes = [
	{ 
		path: "/wishlist/status/list",
		element: <LihatWishlistWithStatusPage />,
	},
	{ 
		path: "/wishlist/status/add",
		element: <AddWishlistWithStatusPage />,
	}
]

export default wishlistWithStatusRoutes
