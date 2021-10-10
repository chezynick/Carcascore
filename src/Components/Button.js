import React from 'react';

const Button = ({outline, name, func, alternate, disabled}) => {
    if(disabled){
        return (
            <button disabled={true} onClick={()=>func()}  className="w-1/2 border-2 border-gray-600 py-2 px-2  rounded-lg text-gray-600  text-center bg-gray-300 ">{name}</button>
            )
    }
    if(alternate && outline){
        return (
            <button onClick={()=>func()}   className="w-1/2 border-2 border-yellow-300 py-2 md:w-1/3 md:rounded-lg focus:outline-none text-yellow-300  text-center bg-black ">{name}</button>
        )
    }
    if(alternate && !outline){
        return (
            <button onClick={()=>func()}   className=" text-black w-1/2 border-2 border-black outline-none focus:outline-none py-2 md:w-1/3 md:rounded-lg  text-center bg-yellow-300">{name}</button>
        )
    }
    if (!alternate && !outline){
        return (
            <button onClick={()=>func()}  className="w-1/2 border-none outline-none py-2 md:w-32 rounded-lg text-white  text-center bg-red-800 ">{name}</button>
        )
    }
    return (
        <button onClick={()=>func()}  className="w-1/2 border-2 border-red-800 py-2 md:w-32 rounded-lg text-red-800  text-center bg-gray-100 ">{name}</button>
    )
     
}
 
export default Button;