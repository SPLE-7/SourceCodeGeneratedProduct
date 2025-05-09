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
const LihatBukuDigitalPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listBukuDigital: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listBukuDigital: true}))
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
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Buku Digital"}
	singularName={"Buku"}
	items={[]}
	isLoading={isLoading.listBukuDigital}
>
	<BukuCard
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatBukuDigitalPage

