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
import WishlistCard from "../components/WishlistCard";

import getListWishlistWithNote from '../services/getListWishlistWithNote'
const LihatWishlistWithNotePage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listWishlistWithNote: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listWishlistWithNote, setListWishlistWithNote] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listWishlistWithNote: true}))
				const { data: listWishlistWithNote } = await getListWishlistWithNote()
				setListWishlistWithNote(listWishlistWithNote.data)
			} finally {
				setIsLoading(prev => ({...prev, listWishlistWithNote: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Lihat Wishlist With Note Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/wishlist/note/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah Wishlist Note
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Wishlist With Note"}
	singularName={"Wishlist"}
	items={[listWishlistWithNote]}
	isLoading={isLoading.listWishlistWithNote}
>
	<WishlistCard
		listWishlistWithNote={listWishlistWithNote}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LihatWishlistWithNotePage

