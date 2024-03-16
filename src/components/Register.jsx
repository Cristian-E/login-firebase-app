import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/autoContext'
import { useNavigate } from 'react-router-dom'

import img from '../assets/img-bg.jpg'

const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { singup } = useAuth()
    const navigate = useNavigate()


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value })


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await singup(user.email, user.password)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=" div-main ">
            <div className=" w-1/2 h-screen text-white  flex justify-center items-center flex-col">
                <div className="w-2/3 ">
                    <h1 className="text-4xl text-center mb-16 font-bold text-gray-600 mb-4" >Iniciar sesion</h1>
                    <form onSubmit={handleSubmit}>


                        <div className="relative my-4 mb-16 mt-16" >
                            <input type="email"
                                onChange={handleChange}
                                name="email"
                                id="email"
                                className="w-full text-black +pb-1 border-b-2 border-gray-300 bg-transparent outline-none focus:border-indigo-900 "
                                placeholder="Email"
                                autoComplete="off" />
                        </div>
                        <div className="relative my-4 mb-16" >

                            <input type="password"
                                onChange={handleChange}
                                name="password"
                                id="password"
                                className="w-full text-black pb-1 border-b-2 border-gray-300 bg-transparent outline-none focus:border-indigo-900 "
                                placeholder="Contraseña"
                                autoComplete="off" />
                        </div>




                        {/* <Inputs type={"name"} placeholder={"Escriba su nombre"} />
                        <Inputs type={"email"} placeholder={"Email"} />
                        <Inputs type={"password"} placeholder={"contraseña"} /> */}


                        <div className=" flex flex-col justify-center items-center text-black">
                            <button className="border-2  border-indigo-900 bg-indigo-900 rounded-full px-4 py-3 transition-all ease-in-out duration-200 text-white text-base w-32 flex flex-row justify-center items-center gap-2">
                                <span className="flex justify-center items-center font-semibold ">Registrar </span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>

                            <div className="mt-10">
                                <span>Ya tienes cuenta? <Link to="/login" className="border-b-2 border-indigo-900">Iniciar sesion</Link> </span>
                            </div>
                        </div>

                    </form>


                </div>
            </div>

            <div className="w-1/2 ">
                <img src={img} alt="" className="object-cover h-[100vh] w-full" />
            </div>

        </div>
    )
}

export default Register