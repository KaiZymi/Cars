import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CarService} from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem.jsx";

const CarDetail = () =>{

	const {id} = useParams()
	const [car, setCar] = useState({})

	useEffect(() => {
		if(!id) return

		const fetchData = async () =>{
			const data = await CarService.getById(id)

			setCar(...data)
		}
		fetchData()
	}, [id])

	if(!car.name) return <div>loading...</div>

	return(

		<div>
			<Link to={`/`}>Home</Link>
			<CarItem car={car} />
		</div>
	)

}

export default CarDetail