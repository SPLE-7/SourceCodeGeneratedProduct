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
import ModifiedFormTambahBukuFisik from '../components/ModifiedFormTambahBukuFisik'
const TambahBukuFisikPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahBukuFisik: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Tambah Buku Fisik Page")
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
		singularName={"Buku"}
		
	>
		<ModifiedFormTambahBukuFisik
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahBukuFisikPage

