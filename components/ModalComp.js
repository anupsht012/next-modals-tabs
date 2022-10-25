import React, { useState } from 'react'
import { Dialog } from '../common/Dialog'

const ModalComp = () => {
  const [isAppear, setIsAppear] = useState(false);

  const toggleAppear= ()=>{
    setIsAppear(!isAppear);
 }
 const showAddDialog = () =>{
    toggleAppear();
}
const subscribed=()=>{
    toggleAppear();

}
  return (
    <div>
    <div className='dialogbtn' >
    <button className='modalbtn' onClick={showAddDialog}>Show Modal</button>
    </div>
      {isAppear &&  <Dialog closeDialog={toggleAppear}>
            
               <div className='dialog-content'>
               My name is Anup Shrestha.
               </div>
               <div className="subscribe" onClick={subscribed}>
                SUBSCRIBE NOW !!
               </div>
            
        </Dialog>}
    </div>
  )
}

export default ModalComp
