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
import ReviewCard from "../components/ReviewCard";
const LihatReviewKomentarPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listReviewKomentar: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Lihat Review Komentar Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Review Komentar"}
	singularName={"Review"}
	items={[]}
	isLoading={isLoading.listReviewKomentar}
>
	<ReviewCard
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatReviewKomentarPage

