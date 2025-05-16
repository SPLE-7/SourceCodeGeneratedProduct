/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatWishlistWithStatusPage from './containers/LihatWishlistWithStatusPage'
import ModifiedViewContainer from './containers/ModifiedViewContainer'

const wishlistWithStatusRoutes = [
	{ 
		path: "/wishlist/status/list",
		element: <LihatWishlistWithStatusPage />,
	},
	{ 
		path: "/wishlist/status/add",
		element: <ModifiedViewContainer />,
	}
]

export default wishlistWithStatusRoutes
