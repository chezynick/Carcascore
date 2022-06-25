import React from 'react';
import classnames from 'classnames'


const Button = ({outline, name, func, alternate, disabled, lightMode = false}) => (
    <button disabled={disabled} onClick={()=>func()} className={classnames('w-1/2 px-2 py-2 text-center md:rounded-lg  ',{
        'text-gray-600 bg-gray-300 border-2 border-gray-600': disabled && !lightMode,
        'text-yellow-300 bg-black border-2 border-yellow-300 md:w-1/3  focus:outline-none' : alternate && outline && !lightMode,
        'text-black bg-yellow-300 border-2 border-black outline-none  focus:outline-none md:w-1/3 md:rounded-lg': alternate && !outline && !lightMode,
        'text-white bg-red-800 border-none rounded-lg outline-none md:w-32': !alternate && !outline && !lightMode,
        'text-red-800 bg-gray-100 border-2 border-red-800 rounded-lg md:w-32' : !alternate && outline ,
        'text-gray-600 bg-gray-300 shadow-md': disabled && lightMode,
        'text-gray-700 border border-red-700 bg-white':  alternate && outline && lightMode,
        'text-gray-700 bg-white shadow-lg outline-none  focus:outline-none md:w-1/3 md:rounded-lg': alternate && !outline && lightMode,
        'text-white bg-gray-500 border-none rounded-lg outline-none md:w-32': !alternate && !outline && lightMode
    })}>{name}</button>
  
   
  
     
);
 
export default Button;