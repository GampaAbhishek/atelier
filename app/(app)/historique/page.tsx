import React from 'react'
import Header from '../components/historique/Header'
import Tickets from '../components/historique/Tickets/Tickets'

function page() {
  return (
    <div className='bg-[#F7FCFF]'>
        <Header />
        <Tickets />
    </div>
  )
}

export default page