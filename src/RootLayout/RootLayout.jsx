import React from 'react'
import Navber from '../component/menubar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/menubar/footer'

const RootLayout = () => {
  return (
    <>
      <Navber/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout;
