import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex p-6 flex-wrap justify-between'>
          <h1 className='text-2xl font-semibold'>Todo-App</h1>
          <ul className='flex gap-10'>
              <ThemeSwitcher />
          </ul>
    </div>
  )
}

export default Navbar
