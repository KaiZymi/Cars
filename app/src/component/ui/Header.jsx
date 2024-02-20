
import {useAuth} from "../../hooks/useAuth.js";


const Header = () =>{
	const {user, setUser} = useAuth()
	return user ? (
			<>
				<h2>Welcome, {user.name}</h2>
				<button onClick={() => setUser(null)}> logout</button>
			</>
		) : (
			<button onClick={() => setUser({name: 'Mark'})}>login</button>
		)
}

export default Header