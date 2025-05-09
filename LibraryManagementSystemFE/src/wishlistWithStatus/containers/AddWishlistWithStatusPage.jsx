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
import { useSearchParams } from "react-router";
import FormForm from '../components/FormForm'
const AddWishlistWithStatusPage = props => {
const [isLoading, setIsLoading] = useState({
	form: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, form: true}))
		const { data: dataBindingResponse } = await getDataBinding({  })

	    setDataBinding(dataBindingResponse.data)


	    setIsLoading(prev => ({...prev, form: false}))
    }
	fetch()
  }, [])

	
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
		singularName={""}
		isLoading={isLoading.form}
	>
		{dataBinding ? 
		(<>
		 <FormForm
			{...{ 
				dataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddWishlistWithStatusPage

