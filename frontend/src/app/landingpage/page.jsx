import React from 'react'
import Navbar from '@/components/navbar'

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="w-full h-[90vh] sticky top-0">
        <img src="/images/image.png" alt="Bem-vindo" className="w-full h-full object-cover" />
      </div>



    </>
  )
};

export default LandingPage  