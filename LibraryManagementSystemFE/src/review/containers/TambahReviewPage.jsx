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
import { useSearchParams } from "react-router";
import FormFormTambahReview from '../components/FormFormTambahReview'

import getDataBuku from '../services/getDataBuku'
const TambahReviewPage = props => {
const [isLoading, setIsLoading] = useState({
	formTambahReview: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBuku, setDataBuku] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formTambahReview: true}))
		const { data: dataBukuResponse } = await getDataBuku({   })

	    setDataBuku(dataBukuResponse.data)


	    setIsLoading(prev => ({...prev, formTambahReview: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Review Page")
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
		singularName={"Tambah"}
		isLoading={isLoading.formTambahReview}
	>
		{dataBuku ? 
		(<>
		 <FormFormTambahReview
			{...{ 
				dataBuku
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahReviewPage

