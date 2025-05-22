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
import PenulisChart from "../components/PenulisChart";

import getListPenulis from '../services/getListPenulis'
const ListAuthor = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	chartPenulis: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listPenulis, setListPenulis] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, chartPenulis: true}))
				const { data: listPenulis } = await getListPenulis()
				setListPenulis(listPenulis.data)
			} finally {
				setIsLoading(prev => ({...prev, chartPenulis: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("ListAuthor")
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
	title={"Chart Penulis"}
	isLoading={isLoading.chartPenulis}
>
	<PenulisChart
		listPenulis={listPenulis}
	/>
</Layouts.ListContainerChartLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListAuthor

