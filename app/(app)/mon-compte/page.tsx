'use client'

import React, { useState } from 'react'
import Form from '../components/MonCompte/Form'
import Tickets from './Tickets/Tickets'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState<'form' | 'tickets'>('form')

  return (
    <div className="p-10 bg-[#F7FCFF]">
      {activeTab === 'form' ? <div className='bg-[#F7FCFF]'>
        <div className="flex items-center gap-6 mb-8">
          <h1 className="text-3xl font-bold text-[#024272]">Mon compte</h1>
        </div>
      </div> :
        <div className='bg-[#F7FCFF]'>
          <div className="flex items-center gap-6 mb-8">
            <h1 className="text-3xl font-bold text-[#024272]">Historique des tickets</h1>
          </div>
        </div>
      }

      {/* Tabs */}
      <div className="flex gap-4 mb-8 ">
        <button
          onClick={() => setActiveTab('form')}
          className={`px-4 py-2 font-bold text-lg transition-colors ${activeTab === 'form'
              ? 'text-[#024272] font-bold border-2 border-[#309DD7] rounded-md'
              : 'text-[#8BABC4] hover:text-gray-600'
            }`}
        >
          Mes Infos
        </button>
        <button
          onClick={() => setActiveTab('tickets')}
          className={`px-4 py-2 font-bold text-lg transition-colors ${activeTab === 'tickets'
              ? 'text-[#024272] font-bold border-2 border-[#309DD7] rounded-md'
              : 'text-[#8BABC4] hover:text-gray-600'
            }`}
        >
          Historique
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'form' && <Form />}
      {activeTab === 'tickets' && <Tickets />}
    </div>
  )
}

export default page