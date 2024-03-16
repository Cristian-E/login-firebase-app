import { Link } from "react-router-dom";
import { useAuth } from "../context/autoContext"

const Home = () => {

    const { user } = useAuth()
    console.log(user);


    return (
        <div className="text-black bg-blue-100 h-screen w-screen flex items-center justify-center gap-10" >
            <Link to={"/registro"} >  registro </Link>
            <Link to={"/login"} > login </Link>


        </div>
    )


}



export default Home
