/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatBukuPage from './containers/LihatBukuPage'
import TambahBukuPage from './containers/TambahBukuPage'
import ConfirmDeleteBook from './containers/ConfirmDeleteBook'

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

	
,

	

]

export default daftarBukuRoutes
