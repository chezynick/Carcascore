import React from 'react';
import carcascoreImage from './carcascore.png';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames'


const Header = ({setShowQuitModal, lightMode, setLightMode }) => {
   
    return ( <div className={classnames("flex items-center w-full h-24 pt-6  md:pt-0 justify-evenly",{
'text-yellow-300 bg-gray-800' : !lightMode,
'text-gray-700 bg-gray-50 shadow-lg' : lightMode
    })}> 
    <FontAwesomeIcon icon={faFortAwesome} className="hidden fill-current md:block"  size="5x" />
    <button  onClick={()=>setShowQuitModal(true)} className="fill-current ring-0 focus:outline-none">
        {!lightMode && <img src={carcascoreImage} alt="carcascore title"/>}
        {lightMode && <h1 className='text-6xl text-red-400'>CarcaScore</h1>}
        </button>
    <div><label htmlFor="lightMode">Light Mode</label> <input type="checkbox" onChange={()=>setLightMode(!lightMode)} name="lightMode"/></div>
   
    </div> );
}
 
export default Header;