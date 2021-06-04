import React, {useState} from 'react';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuitModal from './QuitModal'
const Header = () => {

    const [ showQuitModal, setShowQuitModal] = useState(false);
   
    return ( <div className="w-full h-24 bg-gray-300 flex  items-center justify-evenly"> 
    <button onClick={()=>setShowQuitModal(true)} className="ring-0  focus:outline-none"><FontAwesomeIcon icon={faFortAwesome} color="black" size="5x" /></button>
    <h1 className="font-bold text-black text-5xl hidden md:flex">Carcassone Scorer</h1>
    <FontAwesomeIcon icon={faFortAwesome} color="black" size="5x" className="hidden md:block"/>
    {showQuitModal && 
              ( <QuitModal setShowQuitModal={setShowQuitModal}/>)
           }
    </div> );
}
 
export default Header;