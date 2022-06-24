import React from 'react';
import carcascoreImage from './carcascore.png';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({setShowQuitModal}) => {
   
    return ( <div className="flex items-center w-full h-24 pt-6 text-yellow-300 bg-gray-800 md:pt-0 justify-evenly"> 
    <FontAwesomeIcon icon={faFortAwesome} className="hidden fill-current md:block"  size="5x" />
    <button onClick={()=>setShowQuitModal(true)} className="fill-current ring-0 focus:outline-none">
        <img src={carcascoreImage} alt="carcascore title"/>
        </button>
    <FontAwesomeIcon icon={faFortAwesome}  size="5x" className="hidden fill-current md:block"/>
    
    </div> );
}
 
export default Header;