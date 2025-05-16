/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
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
import GenreCard from "../components/GenreCard";

import getListGenre from '../services/getListGenre'
const ListGenre = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listGenre: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listGenre, setListGenre] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listGenre: true}))
				const { data: listGenre } = await getListGenre()
				setListGenre(listGenre.data)
			} finally {
				setIsLoading(prev => ({...prev, listGenre: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("ListGenre")
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
	title={"List Genre"}
	singularName={"Genre"}
	items={[listGenre]}
	isLoading={isLoading.listGenre}
>
	<GenreCard
		listGenre={listGenre}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListGenre

