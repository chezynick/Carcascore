import React from 'react';

const Navbar = ({setPage}) => {
    const tabs = [ {name:'New Game', value:'newGame'}, {name:'History', value:'history'}]
    return ( 
        <div className="w-full flex items-center h-24 font-semibold text-3xl">
           {tabs.map(tab => (
               <nav key={tab.name} className="cursor-pointer pl-8"  onClick={()=>{setPage(tab.value)}}>{tab.name}</nav>
           ))} 
        </div>
     );
}
 
export default Navbar;