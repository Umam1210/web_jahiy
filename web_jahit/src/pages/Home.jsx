import React from 'react'
import HomeIndex from '../components/HomeIndex'
import Navbar from '../components/Navbar'
import ShopeList from '../components/ShopeList'

export default function Home() {
  return (
    <>
      <div className='sticky-top'>
        <Navbar />
      </div>
      <div>
        <HomeIndex />
        <ShopeList />
      </div>
    </>
  )
}
