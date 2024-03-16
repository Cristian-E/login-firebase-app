import React, { useState } from 'react'

export const Inputs = ({ type, placeholder }) => {

    const [user, setUser] = useState({})

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (



        <div className="relative my-4 mb-10" >
            <input
                type={type}
                id={type}
                className="w-full pb-1 border-b-2 border-gray-300 bg-transparent outline-none focus:border-indigo-900 text-black"
                placeholder={placeholder}
                autoComplete="off"
                name={type}
                onChange={handleChange}
            />
        </div>
    )
}
