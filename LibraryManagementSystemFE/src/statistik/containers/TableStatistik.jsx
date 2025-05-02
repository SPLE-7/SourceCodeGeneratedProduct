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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import Wrappertab from '../components/Wrappertab'
const TableStatistik = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	wrappertab: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Table Statistik")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Wrappertab />

	</Layouts.ViewContainerLayout>
  )
}
export default TableStatistik

