/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LihatPeminjamanPage from './containers/LihatPeminjamanPage'
import TambahPeminjamanBukuPage from './containers/TambahPeminjamanBukuPage'

const peminjamanRoutes = [
{ 
	path: "/peminjaman/list",
	element: <LihatPeminjamanPage />,
}

	
,
{ 
	path: "/peminjaman/tambah",
	element: <TambahPeminjamanBukuPage />,
}

	

]

export default peminjamanRoutes
