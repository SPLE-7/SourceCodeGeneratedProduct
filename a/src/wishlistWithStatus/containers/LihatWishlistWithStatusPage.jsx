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
import WishlistCard from "../components/WishlistCard";

import getListWishlistWithStatus from '../services/getListWishlistWithStatus'
const LihatWishlistWithStatusPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listWishlistWithStatus: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listWishlistWithStatus, setListWishlistWithStatus] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listWishlistWithStatus: true}))
				const { data: listWishlistWithStatus } = await getListWishlistWithStatus()
				setListWishlistWithStatus(listWishlistWithStatus.data)
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
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Wishlist With Status"}
	singularName={"Wishlist"}
	items={[listWishlistWithStatus]}
	isLoading={isLoading.listWishlistWithStatus}
>
	<WishlistCard
		listWishlistWithStatus={listWishlistWithStatus}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatWishlistWithStatusPage

