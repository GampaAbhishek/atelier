'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import AttachIcon from '@/public/OuvrirUnTicket/attach.svg'
import { Dropdown } from './Dropdown'
import { POSTE_OPTIONS, TYPE_OPTIONS, PRIORITE_OPTIONS, IMPACT_OPTIONS } from './dropdownConstants'
import { useTicket } from '@/app/hooks/useTicket'
import { TicketFormData } from '@/app/services/interfaces/ITicketService'

function Ticket() {
  const { submitTicket, loading, error, success } = useTicket()

  const [formData, setFormData] = useState<TicketFormData & { piecesJointes: File[] }>({
    poste: '',
    type: '',
    priorite: '',
    impact: '',
    sujet: '',
    description: '',
    piecesJointes: []
  })

  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear validation error for this field on change
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const handleDropdownChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }))
    // Clear validation error for this field
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => {
        const updated = { ...prev }
        delete updated[fieldName]
        return updated
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    if (files.length > 0) {
      const file = files[0]
      setSelectedFile(file)
      // Clear file validation error
      if (validationErrors['piece_jointe']) {
        setValidationErrors(prev => {
          const updated = { ...prev }
          delete updated['piece_jointe']
          return updated
        })
      }
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationErrors({})

    try {
      const result = await submitTicket(formData, selectedFile)

      if (result.success && result.data) {
        // Reset form on success
        setFormData({
          poste: '',
          type: '',
          priorite: '',
          impact: '',
          sujet: '',
          description: '',
          piecesJointes: []
        })
        setSelectedFile(null)
        setUploadProgress(0)
      }
    } catch (err) {
      console.error('Submission error:', err)
    }
  }

  return (
    <div className='p-10'>
      {/* Success Message */}
      {success && (
        <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
          {success}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>

{/* Dropdowns Row 1: Poste, Type, Priorité, Impact */}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:w-[60%]  gap-6'>
          <div>
            <Dropdown
              label='Poste'
              options={POSTE_OPTIONS}
              value={formData.poste}
              onChange={(value) => handleDropdownChange('poste', value)}
            />
            {validationErrors.poste && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.poste}</p>
            )}
          </div>

          <div>
            <Dropdown
              label='Type'
              options={TYPE_OPTIONS}
              value={formData.type}
              onChange={(value) => handleDropdownChange('type', value)}
            />
            {validationErrors.type && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.type}</p>
            )}
          </div>

          <div>
            <Dropdown
              label='Priorité'
              options={PRIORITE_OPTIONS}
              value={formData.priorite}
              onChange={(value) => handleDropdownChange('priorite', value)}
              variant='priority'
            />
            {validationErrors.priorite && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.priorite}</p>
            )}
          </div>

          <div>
            <Dropdown
              label='Impact'
              options={IMPACT_OPTIONS}
              value={formData.impact}
              onChange={(value) => handleDropdownChange('impact', value)}
            />
            {validationErrors.impact && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.impact}</p>
            )}
          </div>
        </div>

        {/* Subject and Attachment Row */}
        <div className='sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row gap-6'>
          {/* Subject */}
          <div className='md:flex-1 2xl:flex-none 2xl:w-[29.5%]'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Sujet
            </label>
            <input
              type='text'
              name='sujet'
              value={formData.sujet}
              onChange={handleInputChange}
              placeholder='Entrez le sujet'
              className={`w-full bg-white text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                validationErrors.sujet ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {validationErrors.sujet && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.sujet}</p>
            )}
          </div>

          {/* Attachment */}
          <div className='md:flex-1 max-sm:mt-6 2xl:flex-none 2xl:w-[29.5%]'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Pièce jointe
            </label>
            <div className='sm:flex relative sm:flex-row md:flex md:flex-row md:gap-2 w-full'>
              <input
                type='file'
                onChange={handleFileChange}
                className='hidden w-full bg-white 2xl:w-[50%]'
                id='file-input'
                disabled={loading}
              />
              <label
                htmlFor='file-input'
                className={`flex-1 px-4 py-2 border rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 flex items-center w-full ${
                  validationErrors.piece_jointe
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <span className='text-gray-600 max-sm:text-sm'>
                  {selectedFile ? selectedFile.name : 'Sélectionner fichier'}
                </span>
              </label>
              <button
                type='button'
                onClick={() => document.getElementById('file-input')?.click()}
                disabled={loading}
                className={`max-sm:px-2 md:px-6 absolute max-sm:top-[7%] top-[7%] md:right-1 max-sm:right-1 right-10 max-sm:py-1 py-1.5 text-white rounded-lg font-medium transition-colors ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1BACE1] hover:bg-[#169bc8]'
                }`}
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
            {selectedFile && (
              <div className='mt-2 flex justify-between items-center text-sm text-gray-600'>
                <span>1 fichier sélectionné: {selectedFile.name}</span>
                <button
                  type='button'
                  onClick={removeFile}
                  className='text-red-600 hover:text-red-800 font-medium'
                  disabled={loading}
                >
                  Supprimer
                </button>
              </div>
            )}
            {validationErrors.piece_jointe && (
              <p className='text-red-600 text-sm mt-1'>{validationErrors.piece_jointe}</p>
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
            className={`w-full text-black 2xl:w-[60%] bg-white px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              validationErrors.description ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {validationErrors.description && (
            <p className='text-red-600 text-sm mt-1'>{validationErrors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className='flex justify-end 2xl:w-[60%]'>
          <button
            type='submit'
            disabled={loading}
            className={`px-8 py-2 text-white rounded-lg font-medium transition-colors ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-600'
            }`}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ticket