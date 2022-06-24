import React from 'react';

const Navbar = ({setPage, page}) => {
    const tabs = [ {name:'New Game', value:'newGame'}, {name:'History', value:'history'}]
    return ( 
        <div className="flex items-center w-full h-24 text-3xl font-semibold">
           {tabs.map(tab => (
               <nav key={tab.name} className={`cursor-pointer pl-8 ${page === tab.value? 'underline': ''}`}  onClick={()=>{setPage(tab.value)}}>{tab.name}</nav>
           ))} 
        </div>
     );
}
 
export default Navbar;