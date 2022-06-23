import React from 'react';
import carcascoreImage from './carcascore.png';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({setShowQuitModal}) => {
const dayArray = ['m','t','w','thur','f','s','sun'];
const days = 7;
const period = 3;

console.log(dayArray.splice(0,days - period))
   
    return ( <div className="w-full pt-6 md:pt-0 h-24 bg-gray-800 flex  items-center justify-evenly text-yellow-300"> 
    <FontAwesomeIcon icon={faFortAwesome} className=" fill-current hidden md:block"  size="5x" />
    <button onClick={()=>setShowQuitModal(true)} className="ring-0 fill-current focus:outline-none">
        <img src={carcascoreImage} alt="carcascore title"/>
        </button>
    <FontAwesomeIcon icon={faFortAwesome}  size="5x" className=" fill-current hidden md:block"/>
    
    </div> );
}
 
export default Header;