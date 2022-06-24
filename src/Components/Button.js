import React from 'react';


const Button = ({outline, name, func, alternate, disabled}) => {
    if(disabled){
        return (
            <button disabled={true} onClick={()=>func()}  className="w-1/2 px-2 py-2 text-center text-gray-600 bg-gray-300 border-2 border-gray-600 rounded-lg ">{name}</button>
            )
    }
    if(alternate && outline){
        return (
            <button onClick={()=>func()}   className="w-1/2 py-2 text-center text-yellow-300 bg-black border-2 border-yellow-300 md:w-1/3 md:rounded-lg focus:outline-none ">{name}</button>
        )
    }
    if(alternate && !outline){
        return (
            <button onClick={()=>func()}   className="w-1/2 py-2 text-center text-black bg-yellow-300 border-2 border-black outline-none  focus:outline-none md:w-1/3 md:rounded-lg">{name}</button>
        )
    }
    if (!alternate && !outline){
        return (
            <button onClick={()=>func()}  className="w-1/2 py-2 text-center text-white bg-red-800 border-none rounded-lg outline-none md:w-32 ">{name}</button>
        )
    }
    return (
        <button onClick={()=>func()}  className="w-1/2 py-2 text-center text-red-800 bg-gray-100 border-2 border-red-800 rounded-lg md:w-32 ">{name}</button>
    )
     
}
 
export default Button;