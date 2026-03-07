'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import AttachIcon from '@/public/OuvrirUnTicket/attach.svg'
import { Dropdown } from './Dropdown'
import { POSTE_OPTIONS, TYPE_OPTIONS, PRIORITE_OPTIONS, IMPACT_OPTIONS } from './dropdownConstants'

function Ticket() {
  const [formData, setFormData] = useState<{
    poste: string
    type: string
    priorite: string
    impact: string
    sujet: string
    description: string
    piecesJointes: File[]
  }>({
    poste: '',
    type: '',
    priorite: '',
    impact: '',
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

  const handleDropdownChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
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

{/* Dropdowns Row 1: Poste, Type, Priorité, Impact */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:w-[40%] gap-6'>
          <Dropdown
            label='Poste'
            options={POSTE_OPTIONS}
            value={formData.poste}
            onChange={(value) => handleDropdownChange('poste', value)}
          />
          <Dropdown
            label='Type'
            options={TYPE_OPTIONS}
            value={formData.type}
            onChange={(value) => handleDropdownChange('type', value)}
          />
          <Dropdown
            label='Priorité'
            options={PRIORITE_OPTIONS}
            value={formData.priorite}
            onChange={(value) => handleDropdownChange('priorite', value)}
            variant='priority'
          />
          <Dropdown
            label='Impact'
            options={IMPACT_OPTIONS}
            value={formData.impact}
            onChange={(value) => handleDropdownChange('impact', value)}
          />
        </div>

        {/* Subject and Attachment Row */}
        <div className='sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row gap-6'>
          {/* Subject */}
          <div className='md:flex-1 2xl:flex-none 2xl:w-[19.5%]'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Sujet
            </label>
            <input
              type='text'
              name='sujet'
              value={formData.sujet}
              onChange={handleInputChange}
              placeholder='Entrez le sujet'
              className='w-full bg-white  text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Attachment */}
          <div className='md:flex-1  2xl:flex-none 2xl:w-[19.5%] '>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Pièce jointe
            </label>
            <div className='sm:flex relative sm:flex-row md:flex md:flex-row  md:gap-2 w-full '>
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
                <span className='text-gray-600 max-sm:text-sm'>Sélectionner fichier</span>
              </label>
              <button
                type='button'
                onClick={() => document.getElementById('file-input')?.click()}
                className='max-sm:px-2 md:px-6 absolute max-sm:top-[2%] md:right-0 max-sm:right-0 right-10 max-sm:py-1.5 py-[8.5px] bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors'
              >
                Ajouter
                <Image
                  src={AttachIcon}
                  alt='Attach Icon'
                  width={15}
                  height={15}
                  className='inline-block ml-2'
                />
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
            className='w-full text-black 2xl:w-[40%] bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
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