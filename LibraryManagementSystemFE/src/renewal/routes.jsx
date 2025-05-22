/*
	Generated on 21/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatPeminjamanRenewalPage from './containers/LihatPeminjamanRenewalPage'
import TambahPeminjamanRenewalPage from './containers/TambahPeminjamanRenewalPage'

const renewalRoutes = [
	{ 
		path: "/peminjaman/renewal/list",
		element: <LihatPeminjamanRenewalPage />,
	},
	{ 
		path: "/peminjaman/renewal/tambah",
		element: <TambahPeminjamanRenewalPage />,
	}
]

export default renewalRoutes
