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

import getDataBindingWishlist from '../services/getDataBindingWishlist'
const LihatWishlistPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listWishlist: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBindingWishlist, setDataBindingWishlist] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listWishlist: true}))
				const { data: dataBindingWishlist } = await getDataBindingWishlist()
				setDataBindingWishlist(dataBindingWishlist.data)
			} finally {
				setIsLoading(prev => ({...prev, listWishlist: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Wishlist Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/wishlist/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Wishlist
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Wishlist"}
	singularName={"Wishlist"}
	items={[dataBindingWishlist]}
	isLoading={isLoading.listWishlist}
>
	<WishlistCard
		dataBindingWishlist={dataBindingWishlist}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatWishlistPage

