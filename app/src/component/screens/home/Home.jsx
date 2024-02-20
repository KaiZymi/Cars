import styles from './Home.module.css'

import CarItem from "./car-item/CarItem.jsx";

import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {CarService} from "../../../services/car.service.js";

import {useQuery} from "@tanstack/react-query";
import Header from "../../ui/Header.jsx";
import Catalog from "../../ui/Catalog.jsx";


const Home = () => {

	const {data, isLoading} = useQuery({
		queryKey: ['cars'],
		queryFn: () =>
			CarService.getAll()
	})

	if (isLoading) return <p>Loading...</p>

	return (
		<div>
			<h1>Cars catalog</h1>
			<Header />
			<CreateCarForm/>
			<Catalog data={data}/>
		</div>
	)
}


export default Home