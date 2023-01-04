import React from 'react'
import HomeIndex from '../components/HomeIndex'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <div className='sticky-top'>
        <Navbar />
      </div>
      <div>
        <HomeIndex />
        <LandingPage />
      </div>
    </>
  )
}
