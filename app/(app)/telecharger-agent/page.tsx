
'use client'

import React from 'react'
import AppleIcon from '@/public/TeleChargerAgent/appleIcon.png';
import WindowsIcon from '@/public/TeleChargerAgent/windowIcon.png';
import LinuxIcon from '@/public/TeleChargerAgent/tuxIcon.png';
import ChromeIcon from '@/public/TeleChargerAgent/googleIcon.png';
import Image from 'next/image';

function Page() {
  const systems = [
    {
      id: 1,
      name: 'Windows',
      description: 'Pour Windows 7, 8, 10 et Windows Server à partir de 2008 R2. Compatible avec Citrix XenApp et Microsoft Terminal Server.',
      logoPlaceholder: WindowsIcon
    },
    {
      id: 2,
      name: 'Mac',
      description: 'Pour tout Mac fonctionnant sous macOS 11.0 ou version ultérieure.',
      logoPlaceholder: AppleIcon
    },
    {
      id: 3,
      name: 'Linux',
      description: '.rpm pour systèmes RPM 64 bits\n.deb pour systèmes Debian 64 bits\n.tgz pour autres systèmes 64 bits',
      logoPlaceholder: LinuxIcon
    },
    {
      id: 4,
      name: 'Chrome',
      description: 'Pour tout Chromebook sous Chrome OS version 88 ou ultérieure.',
      logoPlaceholder: ChromeIcon
    }
  ]

  const handleDownload = (systemName: string) => {
    console.log(`Télécharger pour ${systemName}`)
  }

  return (
    <div className='min-h-screen bg-[#F7FCFF] p-10'>
      {/* Header Section */}
      <div className='max-w-6xl'
      style={{
        paddingBottom:"20px"
      }}>
        <h1 className='text-4xl font-bold text-[#024272] mb-4'>
          Télécharger l&apos;agent
        </h1>
        <p className='text-lg mb-12 text-[#1BACE1] font-semibold'>
          Sélectionnez votre système pour démarrer le téléchargement
        </p>
      </div>

      {/* Systems Grid */}
      <div className='pt-8'>
        <div className='flex  gap-6'>
          {systems.map((system) => (
            <div
              key={system.id}
              className='border-2 w-[200px] border-[#1BACE1] rounded-lg  flex flex-col'
            >
              {/* Logo Section */}
              <div className='h-32 bg-gradient-to-b from-cyan-50 to-cyan-100 flex items-center justify-center border-b-2 border-[#1BACE1]'>
                <Image
                  src={system.logoPlaceholder}
                  alt={`${system.name} Logo`}
                    width={80}
                    height={80}
                  className='object-contain'
                />
              </div>

              {/* Download Button */}
              <div className='bg-[#1BACE1] px-4 py-3 flex justify-center'>
                <button
                  onClick={() => handleDownload(system.name)}
                  className='bg-[#1BACE1] hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded transition-colors'
                >
                  Télécharger
                </button>
              </div>

              {/* Description Section */}
              <div className='p-4 flex-grow flex items-center justify-center'
              
              >
                <p className='text-sm text-gray-600 text-center whitespace-pre-line leading-relaxed'>
                  {system.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page