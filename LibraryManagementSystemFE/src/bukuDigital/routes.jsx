/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatBukuDigitalPage from './containers/LihatBukuDigitalPage'
import TambahBukuDigitalpage from './containers/TambahBukuDigitalpage'

const bukuDigitalRoutes = [
	{ 
		path: "/daftarbuku/digital/list",
		element: <LihatBukuDigitalPage />,
	},
	{ 
		path: "/daftarbuku/digital/tambah",
		element: <TambahBukuDigitalpage />,
	}
]

export default bukuDigitalRoutes
