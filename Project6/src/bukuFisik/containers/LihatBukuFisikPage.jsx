/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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

import getListBukuFisik from '../services/getListBukuFisik'
const LihatBukuFisikPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listBukuFisik: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listBukuFisik, setListBukuFisik] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listBukuFisik: true}))
				const { data: listBukuFisik } = await getListBukuFisik()
				setListBukuFisik(listBukuFisik.data)
			} finally {
				setIsLoading(prev => ({...prev, listBukuFisik: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Buku Fisik Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/daftarbuku/fisik/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Buku Fisik
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Buku Fisik"}
	singularName={"Buku"}
	items={[listBukuFisik]}
	isLoading={isLoading.listBukuFisik}
>
	<BukuCard
		listBukuFisik={listBukuFisik}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatBukuFisikPage

