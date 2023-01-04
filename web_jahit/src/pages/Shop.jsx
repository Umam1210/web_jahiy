import React from 'react'
import Navbar from '../components/Navbar'
import ShopeList from '../components/ShopeList'
import CategoryShope from '../components/CategoryShope'

export default function Shop() {
  return (
    <>
      <div className='col-span-12 sticky-top'>
        <Navbar />
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <CategoryShope />
        </div>
        <div className='col-span-9'>
          <ShopeList />
        </div>
      </div>
    </>
  )
}
