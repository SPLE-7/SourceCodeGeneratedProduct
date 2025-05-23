/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PeminjamanCard from "../components/PeminjamanCard";

import getDataBindingPeminjaman from '../services/getDataBindingPeminjaman'
const LihatPeminjamanPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listPeminjaman: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBindingPeminjaman, setDataBindingPeminjaman] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listPeminjaman: true}))
				const { data: dataBindingPeminjaman } = await getDataBindingPeminjaman()
				setDataBindingPeminjaman(dataBindingPeminjaman.data)
			} finally {
				setIsLoading(prev => ({...prev, listPeminjaman: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Peminjaman Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/peminjaman/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Peminjaman
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Peminjaman"}
	singularName={"Peminjaman"}
	items={[dataBindingPeminjaman]}
	isLoading={isLoading.listPeminjaman}
>
	<PeminjamanCard
		dataBindingPeminjaman={dataBindingPeminjaman}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatPeminjamanPage

