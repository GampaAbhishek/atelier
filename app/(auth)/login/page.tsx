'use client'
import React from 'react'
import Image from 'next/image'
import LoginPageImage from '../../../public/Login/loginPageImage.png'

function Login() {
    // It is a handleFunction 
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Here you would typically handle authentication logic, e.g., call an API to verify credentials
        // For demonstration, we'll just redirect to the dashboard
        window.location.href = "/dashboard";
    }

  return (
    <div className='min-h-[90vh] bg-[#DCF1F9]'>
        <div className='bg-white rounded-2xl p-7 m-3 h-full flex max-md:flex-col'>
            <Image src={LoginPageImage} alt='Login page image' className='w-1/2 max-md:w-full   md:block' />
            <div className='flex flex-col w-full md:w-1/2 justify-center items-center gap-10 p-6 md:p-0'>
                <h1 className='text-[#1BACE1] text-4xl md:text-7xl text-center'>Se connecter</h1>
                <form className='flex flex-col gap-6 w-full max-w-sm'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-[#1BACE1] text-sm font-medium'>Identifiant ou e-mail</label>
                        <input 
                            type='text' 
                            className='border border-[#1BACE1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1BACE1]'
                        />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <label className='text-[#1BACE1] text-sm font-medium'>Mot de passe</label>
                        <input 
                            type='password' 
                            className='border border-[#1BACE1] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1BACE1]'
                        />
                    </div>
                    
                    <label className='flex items-center gap-2 text-[#1BACE1] text-sm'>
                        <input type='checkbox' className='w-4 h-4' />
                        Se souvenir de moi
                    </label>
                    
                    <div className='flex flex-col gap-3 justify-end items-end'>
                        <button className='bg-[#1BACE1] cursor-pointer text-white px-6 rounded-lg py-3 font-medium hover:bg-[#169bc8] transition w-full md:w-auto'
                        onClick={handleLogin}
                        >
                            se connecter
                        </button>
                    
                        <a href='#' className='text-[#1BACE1] text-sm hover:underline'>
                            Mot de passe oublié ?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login