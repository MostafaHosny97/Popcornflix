import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({userData,clearUserData}) {


  return <>
    <Navbar userData={userData} clearUserData={clearUserData}/>
    <div className="container">
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
