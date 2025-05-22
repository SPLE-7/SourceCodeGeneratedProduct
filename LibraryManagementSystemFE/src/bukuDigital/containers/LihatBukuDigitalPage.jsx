/*
	Generated on 21/05/2025 by UI Generator PRICES-IDE
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

import getListBukuDigital from '../services/getListBukuDigital'
const LihatBukuDigitalPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listBukuDigital: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listBukuDigital, setListBukuDigital] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listBukuDigital: true}))
				const { data: listBukuDigital } = await getListBukuDigital()
				setListBukuDigital(listBukuDigital.data)
			} finally {
				setIsLoading(prev => ({...prev, listBukuDigital: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Buku Digital Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/daftarbuku/digital/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Buku Digital
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Buku Digital"}
	singularName={"Buku"}
	items={[listBukuDigital]}
	isLoading={isLoading.listBukuDigital}
>
	<BukuCard
		listBukuDigital={listBukuDigital}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatBukuDigitalPage

