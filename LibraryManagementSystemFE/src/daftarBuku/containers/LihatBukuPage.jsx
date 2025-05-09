/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
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
import BukuCard from "../components/BukuCard";

import getDataBindingBuku from '../services/getDataBindingBuku'
const LihatBukuPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listBuku: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBindingBuku, setDataBindingBuku] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listBuku: true}))
				const { data: dataBindingBuku } = await getDataBindingBuku()
				setDataBindingBuku(dataBindingBuku.data)
			} finally {
				setIsLoading(prev => ({...prev, listBuku: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Buku Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/daftarbuku/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Buku
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Buku"}
	singularName={"Buku"}
	items={[dataBindingBuku]}
	isLoading={isLoading.listBuku}
>
	<BukuCard
		dataBindingBuku={dataBindingBuku}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatBukuPage

