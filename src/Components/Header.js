import React from 'react';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return ( <div className="w-full h-24 bg-gray-300 flex  items-center justify-evenly"> 
    <FontAwesomeIcon icon={faFortAwesome} color="black" size="5x"/>
    <h1 className="font-bold text-black text-5xl hidden md:flex">Carcassone Scorer</h1>
    <FontAwesomeIcon icon={faFortAwesome} color="black" size="5x" className="hidden md:block"/>
    </div> );
}
 
export default Header;