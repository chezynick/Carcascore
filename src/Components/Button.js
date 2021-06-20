import React from 'react';

const Button = (outline, name) => {
    
    if (!outline){
        return (
            <button className="w-1/2 border-none outline-none py-4 md:w-32 rounded-lg  text-center bg-red-800 ">{name}</button>
        )
    }
    return (
        <button className="w-1/2 border-2 border-red-800 py-4 md:w-32 rounded-lg text-red-800  text-center bg-gray-100 "></button>
    )
     
}
 
export default Button;