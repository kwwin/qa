import React from 'react'
import {Outlet} from 'react-router-dom'
import {  useNavigate } from "react-router-dom";
import App from '../App';

const HomeLayout = () => {
    const navigate = useNavigate()
   
  return (
    <div>
         <App/>
         <Outlet/>
    </div>
  )
}

export default HomeLayout

