import React from 'react';

const QuitModal = ({setShowQuitModal}) => {
    return (
        <div className="absolute bg-indigo-200 text-black border-2 border-gray-700 mt-96 object-center p-10  z-50">
            <h3>Are you sure you want to quit? all data will be lost</h3>
            <div className="flex w-full items-center justify-between">
                <a href="/about"><button>quit</button></a>
                <button onClick={()=>setShowQuitModal(false)}>cancel</button>
            </div>
        </div>
      );
}
 
export default QuitModal;