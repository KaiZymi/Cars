import styles from "../Home.module.css";
import {Link} from "react-router-dom";

const CarItem = ({car}) =>{


	return(
		<div  className={styles.item}>
			<div className={styles.image} style={{
				// eslint-disable-next-line react/prop-types
				backgroundImage: `url(${car.image})`
			}}></div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<p>{
					new Intl.NumberFormat('ru-RU',{
						style:'currency',
						currency: 'USD',
					}).format(car.price)
				}</p>
				<Link className={'btn'} to={`/car/${car.id}`} >read more</Link>

			</div>
		</div>
		)
}

export default CarItem