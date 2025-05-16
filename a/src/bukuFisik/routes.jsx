/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatBukuFisikPage from './containers/LihatBukuFisikPage'
import TambahBukuFisikPage from './containers/TambahBukuFisikPage'

const bukuFisikRoutes = [
	{ 
		path: "/daftarbuku/fisik/list",
		element: <LihatBukuFisikPage />,
	},
	{ 
		path: "/daftarbuku/fisik/tambah",
		element: <TambahBukuFisikPage />,
	}
]

export default bukuFisikRoutes
