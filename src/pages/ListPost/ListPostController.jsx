import React from 'react'
import ListPostView from './ListPostView'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ListPostController = () => {
  const [postData, setPostData] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [userName,setUserName]=useState("")

  useEffect(() => {
    axios.get("http://localhost:3033/posts")
      .then((res) => setPostData(res.data))
  }, [])

  return (
    <ListPostView 
    userName={userName} setUserName={setUserName}
    showPopup={showPopup} setShowPopup={setShowPopup} postData={postData} />
  )
}

export default ListPostController