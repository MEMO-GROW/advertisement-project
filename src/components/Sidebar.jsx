import React from 'react'
import K from "../constants"
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-60 bg-fuchsia-900 h-screen py-4 px-2 gap-y-6 fixed left-0 top-0'>
      <span>Logo Here</span>
      <div className='flex flex-col gap-y-6'>
        {K.NAVLINKS.map((link, index) => {
          return <NavLink
            key={index}
            to={link.path}
            className="text-white hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center">

            <link.icon />
            <span>{link.name}</span>
          </NavLink>;
        })
        }
      </div>

      <button className='mt-auto'>Logout</button>
    </div>
  )
}

export default Sidebar