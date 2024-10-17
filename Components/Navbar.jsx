import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
          <h1 className='text-2xl font-semibold'>Todo-App</h1>
          <ul className='flex gap-10'>
              <ThemeSwitcher />
          </ul>
    </div>
  )
}

export default Navbar
