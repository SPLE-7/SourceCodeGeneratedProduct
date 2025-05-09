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
import WishlistCard from "../components/WishlistCard";
const LihatWishlistWithStatusPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listWishlistWithStatus: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listWishlistWithStatus: true}))
			} finally {
				setIsLoading(prev => ({...prev, listWishlistWithStatus: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Wishlist With Status Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/wishlist/status/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  ViewElement Event
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Wishlist With Status"}
	singularName={"Wishlist"}
	items={[]}
	isLoading={isLoading.listWishlistWithStatus}
>
	<WishlistCard
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatWishlistWithStatusPage

