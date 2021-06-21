import React from 'react';

const Button = ({outline, name, func, alternate}) => {
    console.log(outline, name, func)
    if(alternate && outline){
        return (
            <button onClick={()=>func()}  className="w-1/2 border-2 border-yellow-200 py-4  md:w-1/3 rounded-lg text-yellow-200  text-center bg-black ">{name}</button>
        )
    }
    if(alternate && !outline){
        return (
            <button onClick={()=>func()}  className=" text-black w-1/2 border-none outline-none py-4 md:w-1/3 rounded-lg  text-center bg-yellow-200">{name}</button>
        )
    }
    if (!alternate && !outline){
        return (
            <button onClick={()=>func()}  className="w-1/2 border-none outline-none py-4 md:w-32 rounded-lg  text-center bg-red-800 ">{name}</button>
        )
    }
    return (
        <button onClick={()=>func()}  className="w-1/2 border-2 border-red-800 py-4 md:w-32 rounded-lg text-red-800  text-center bg-gray-100 ">{name}</button>
    )
     
}
 
export default Button;