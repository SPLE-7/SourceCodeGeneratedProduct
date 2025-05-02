/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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

import getDetailReview from '../services/getDetailReview'
const LihatReviewPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listReview: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailReview, setDetailReview] = useState()
	
	
	
const [listReviewDataVersion, setListReviewDataVersion] = useState(0)

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listReview: true}))
				const { data: detailReview } = await getDetailReview({ id_buku })
				setDetailReview(detailReview.data)
			} finally {
				setIsLoading(prev => ({...prev, listReview: false}))
			}
		}
		fetchData()
  	}, [listReviewDataVersion])

	
	useEffect(() => {
		setTitle("Lihat Review Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/review/:id_buku/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Review
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Review"}
	singularName={"Review"}
	items={[detailReview]}
	isLoading={isLoading.listReview}
>
	<ReviewCard
		detailReview={detailReview}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatReviewPage

