/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import GenreChart from "../components/GenreChart";

import getListGenre from '../services/getListGenre'
const ListGenre = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	chartGenre: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listGenre, setListGenre] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, chartGenre: true}))
				const { data: listGenre } = await getListGenre()
				setListGenre(listGenre.data)
			} finally {
				setIsLoading(prev => ({...prev, chartGenre: false}))
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
<Layouts.ListContainerChartLayout
	title={"Chart Genre"}
	isLoading={isLoading.chartGenre}
>
	<GenreChart
		listGenre={listGenre}
	/>
</Layouts.ListContainerChartLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListGenre

