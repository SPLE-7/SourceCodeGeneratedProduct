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
import ReviewCard from "../components/ReviewCard";
const LihatReviewBintangPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listReviewBintang: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listReviewBintang: true}))
			} finally {
				setIsLoading(prev => ({...prev, listReviewBintang: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Review Bintang Page")
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
	title={"List Review Bintang"}
	singularName={"Review"}
	items={[]}
	isLoading={isLoading.listReviewBintang}
>
	<ReviewCard
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatReviewBintangPage

