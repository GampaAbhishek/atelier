'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ChevronIcon from '@/public/OuvrirUnTicket/dropdownIcon.png'

export interface DropdownOption {
  value: string
  label: string
  color?: string
}

interface DropdownProps {
  label: string
  placeholder?: string
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  variant?: 'default' | 'priority'
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = 'Sélectionnez une option',
  options,
  value,
  onChange,
  variant = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get selected option
  const selectedOption = options.find(opt => opt.value === value)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <label className='block text-sm font-medium text-gray-700 mb-2'>
        {label}
      </label>

      {/* Dropdown Button */}
      <button
        type='button'
        onClick={toggleDropdown}
        className='w-full  px-4 py-2 relative border border-gray-300 rounded-lg bg-white text-left text-gray-700 flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Image
          src={ChevronIcon}
          alt='Chevron'
          width={35}
          height={35}
          className={`transform cursor-pointer absolute right-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg'>
          {options.map(option => (
            <button
              key={option.value}
              type='button'
              onClick={() => handleSelect(option.value)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-2 ${
                variant === 'priority' ? 'font-medium' : ''
              } ${value === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-800'}`}
            >
              {option.color && (
                <span
                  className='w-3 h-3 rounded-full'
                  style={{ backgroundColor: option.color }}
                />
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
