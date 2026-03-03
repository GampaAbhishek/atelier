import React from 'react'
import Header from '../components/historique/Header'
import Tickets from '../components/historique/Tickets/Tickets'

function page() {
  return (
    <div className='bg-[#F7FCFF] max-sm:pl-5 md:pl-10 pt-10 mb-6'>
        <Header />
        <Tickets />
    </div>
  )
}

export default page