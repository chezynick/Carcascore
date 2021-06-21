import React from 'react';
import Button from './Button'

const QuitModal = ({setShowQuitModal}) => {
    const closeModal = () =>setShowQuitModal(false)
    const refreshPage = () => {window.location.reload()}
    return (
        <div className="absolute bg-indigo-200 text-black border-2 border-gray-700 mt-40 object-center p-4 sm:p-10  z-50">
            <h3>Are you sure you want to quit? all data will be lost</h3>
            <div className="flex w-full flex-col md:flex-row items-center justify-between mt-8">
                <Button name="Quit" func={refreshPage}/>
                <Button outline name="Cancel" func={closeModal}/>
            </div>
        </div>
      );
}
 
export default QuitModal;