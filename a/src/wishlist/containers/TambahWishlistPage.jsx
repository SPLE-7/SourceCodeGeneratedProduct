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
import { useSearchParams } from "react-router";
import FormTambahWishlist from '../components/FormTambahWishlist'

import getDataBinding from '../services/getDataBinding'
const TambahWishlistPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahWishlist: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahWishlist: true}))
		const { data: dataBindingResponse } = await getDataBinding({  })

	    setDataBinding(dataBindingResponse.data)


	    setIsLoading(prev => ({...prev, tambahWishlist: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Wishlist Page")
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
		isLoading={isLoading.tambahWishlist}
	>
		{dataBinding ? 
		(<>
		 <FormTambahWishlist
			{...{ 
				dataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahWishlistPage

