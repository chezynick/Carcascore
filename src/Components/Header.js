import React, {useState} from 'react';
import carcascoreImage from './carcascore.png';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuitModal from './QuitModal'
const Header = () => {

    const [ showQuitModal, setShowQuitModal] = useState(false);
   
    return ( <div className="w-full pt-6 md:pt-0 h-24 bg-gray-800 flex  items-center justify-evenly"> 
    <button onClick={()=>setShowQuitModal(true)} className="ring-0  focus:outline-none"><FontAwesomeIcon icon={faFortAwesome} color="yellow" size="5x" /></button>
    <img src={carcascoreImage} alt="carcascore title"/>
    <FontAwesomeIcon icon={faFortAwesome} color="yellow" size="5x" className="hidden md:block"/>
    {showQuitModal && 
              ( <QuitModal setShowQuitModal={setShowQuitModal}/>)
           }
    </div> );
}
 
export default Header;