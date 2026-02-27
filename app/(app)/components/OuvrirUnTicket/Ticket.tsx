'use client'

import React, { useState } from 'react'

function Ticket() {
  const [formData, setFormData] = useState<{
    sujet: string
    description: string
    piecesJointes: File[]
  }>({
    sujet: '',
    description: '',
    piecesJointes: []
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      piecesJointes: [...prev.piecesJointes, ...files]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Subject and Attachment Row */}
        <div className='flex gap-6'>
          {/* Subject */}
          <div className='md:flex-1 2xl:flex-none'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Sujet
            </label>
            <input
              type='text'
              name='sujet'
              value={formData.sujet}
              onChange={handleInputChange}
              placeholder='Entrez le sujet'
              className='w-full bg-white  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Attachment */}
          <div className='md:flex-1 2xl:flex-none '>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Pièce jointe
            </label>
            <div className='flex gap-2 w-full '>
              <input
                type='file'
                onChange={handleFileChange}
                multiple
                className='hidden w-full bg-white 2xl:w-[50%]'
                id='file-input'
              />
              <label
                htmlFor='file-input'
                className='flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center w-full '
              >
                <span className='text-gray-600'>Sélectionner fichier</span>
              </label>
              <button
                type='button'
                onClick={() => document.getElementById('file-input')?.click()}
                className='px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors'
              >
                Ajouter une pièce jointe
              </button>
            </div>
            {formData.piecesJointes.length > 0 && (
              <div className='mt-2 text-sm text-gray-600'>
                {formData.piecesJointes.length} fichier(s) sélectionné(s)
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Description
          </label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Décrivez votre problème...'
            rows={6}
            className='w-full 2xl:w-[40%] bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Submit Button */}
        <div className='flex justify-end 2xl:w-[40%]'>
          <button
            type='submit'
            className='px-8 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors'
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ticket