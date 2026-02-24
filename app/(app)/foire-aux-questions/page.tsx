import React from 'react'
import Header from '../components/FoireAuxQuestions/Header'
import Info from '../components/FoireAuxQuestions/Info'

function FoireAuxQuestions() {
  return (
    <div className='flex max-sm:flex-col gap-6 sm:gap-8 lg:gap-10 w-full'>
      <Header />
      <Info />
    </div>
  )
}

export default FoireAuxQuestions