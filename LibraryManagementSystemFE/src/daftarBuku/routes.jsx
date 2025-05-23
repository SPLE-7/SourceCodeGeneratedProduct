/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatBukuPage from './containers/LihatBukuPage'
import TambahBukuPage from './containers/TambahBukuPage'

const daftarBukuRoutes = [
{ 
	path: "/daftarbuku/list",
	element: <LihatBukuPage />,
}

	
,
{ 
	path: "/daftarbuku/tambah",
	element: <TambahBukuPage />,
}

	

]

export default daftarBukuRoutes
