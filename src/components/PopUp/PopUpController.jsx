import React from 'react'
import PopUpView from './PopUpView'

const PopUpController = ({postData,setShowPopup,userName}) => {
  return (
    <PopUpView postData={postData} userName={userName} setShowPopup={setShowPopup}/>
  )
}

export default PopUpController