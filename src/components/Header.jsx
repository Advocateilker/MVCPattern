import React from 'react'
import {NavLink,useNavigate} from "react-router-dom"

const Header = () => {

  const navigate=useNavigate()

  return (
    <header>
        <h1 style={{cursor:"pointer"}} onClick={()=>navigate("/")}>MVC</h1>
        <NavLink to={'/add-post'}>Add Post</NavLink>
        <NavLink to={'/'}>Posts</NavLink>   
    </header>
  )
}

export default Header