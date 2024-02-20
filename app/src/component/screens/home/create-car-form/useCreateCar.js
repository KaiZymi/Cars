import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CarService} from "../../../../services/car.service.js";

export const useCreateCar = (reset) => {

	const queryClient = useQueryClient()




	const {mutate} = useMutation({
		mutationKey: ["create car"], mutationFn: (data) =>
			CarService.create(data), onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['cars']})
			reset()
		}
	})

	const createCar = data => {
		mutate(data)
	}

	return {createCar}
}

