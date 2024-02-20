import styles from './CreateCarForm.module.css'

import {useForm} from "react-hook-form";
import {useCreateCar} from "./useCreateCar.js";


const CreateCarForm = () => {

	const {
		register, reset, handleSubmit, formState: {errors}
	} = useForm({
		mode: "onChange"
	})

	const {createCar} = useCreateCar(reset)

	return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
		<input
			{...register('name', {required: 'Name is required'})}
			placeholder={"Name"}
		/>

		{errors?.name?.message && <p style={{color: 'red'}}> Name is required</p>}

		<input
			{...register('price', {required: true})}
			placeholder={"Price"}

		/>
		<input
			{...register('image', {required: true})}
			placeholder={"Image"}

		/>

		<button className={styles.btn}>Create</button>
	</form>
}

export default CreateCarForm