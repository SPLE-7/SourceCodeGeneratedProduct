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
import PeminjamanCard from "../components/PeminjamanCard";

import getListPeminjamanRenewal from '../services/getListPeminjamanRenewal'
const LihatPeminjamanRenewalPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listPeminjamanRenewal: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listPeminjamanRenewal, setListPeminjamanRenewal] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listPeminjamanRenewal: true}))
				const { data: listPeminjamanRenewal } = await getListPeminjamanRenewal()
				setListPeminjamanRenewal(listPeminjamanRenewal.data)
			} finally {
				setIsLoading(prev => ({...prev, listPeminjamanRenewal: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Peminjaman Renewal Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/peminjaman/renewal/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Renewal
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Peminjaman Renewal"}
	singularName={"Peminjaman"}
	items={[listPeminjamanRenewal]}
	isLoading={isLoading.listPeminjamanRenewal}
>
	<PeminjamanCard
		listPeminjamanRenewal={listPeminjamanRenewal}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatPeminjamanRenewalPage

