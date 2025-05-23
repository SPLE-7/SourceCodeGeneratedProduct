/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddWishlistWithStatus from '../components/ModifiedFormAddWishlistWithStatus'
const AddWishlistWithStatusPage = props => {
const [isLoading, setIsLoading] = useState({
	addWishlistWithStatus: false,

	});
	const { setTitle } = useContext(HeaderContext);
	
	useEffect(() => {
		setTitle("Add Wishlist With Status Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Wishlist"}
		
	>
		<ModifiedFormAddWishlistWithStatus
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddWishlistWithStatusPage

