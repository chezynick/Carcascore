import React from 'react';
import Button from './Button'

const QuitModal = ({setShowQuitModal, lightMode}) => {
    const closeModal = () =>setShowQuitModal(false)
    const refreshPage = () => {window.location.reload()}
    return (
        <div className="absolute z-50 object-center p-4 mt-40 text-black bg-indigo-400 border-2 border-gray-700 sm:p-10">
            <h3>Are you sure you want to quit? all data will be lost</h3>
            <div className="flex flex-col items-center justify-between w-full mt-8 md:flex-row">
                <Button lightMode={lightMode} name="Quit" func={refreshPage}/>
                <Button lightMode={lightMode} outline name="Cancel" func={closeModal}/>
            </div>
        </div>
      );
}
 
export default QuitModal;