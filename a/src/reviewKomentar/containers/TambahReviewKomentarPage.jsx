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
import ModifiedFormFormTambahReviewKomentar from '../components/ModifiedFormFormTambahReviewKomentar'
const TambahReviewKomentarPage = props => {
const [isLoading, setIsLoading] = useState({
	formTambahReviewKomentar: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Tambah Review Komentar Page")
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
		
	>
		<ModifiedFormFormTambahReviewKomentar
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahReviewKomentarPage

