import React, { useState } from 'react'
import AddPostModal from './AddPostModal'
import AddPostView from './AddPostView'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const AddPostController = () => {


  const model = new AddPostModal()

  const [form, setForm] = useState(model.state)

  const onInputChange = (key, value) => {
    setForm({
      ...form,
      [key]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.user || !form.title || !form.text) {
      alert("Please fill in all fields")
      return
    } else {
      axios.post("http://localhost:3033/posts", form)
        .then(() => navigate("/"))

    }

    axios
  }

  const navigate = useNavigate()

  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  )
}

export default AddPostController