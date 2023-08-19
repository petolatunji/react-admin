import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits, MdHelpCenter } from 'react-icons/md'
import { FcSettings } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className=' flex flex-col  gap-y-4 '>
      <div className='bg-blue-800 text-white flex gap-x-2 items-center p-2 rounded-md'>
        <BiSolidDashboard />
        <span className='hidden xl:block'>Dashboard</span>
      </div>
      <Link to='/users' className='menudash hover:bg-slate-200 '>
        <AiOutlineUser />
        <span className='hidden xl:block'>Users</span>
      </Link>

      <Link to='/products' className='menudash hover:bg-slate-200'>
        <MdOutlineProductionQuantityLimits />
        <span className='hidden xl:block'>Products</span>
      </Link>
      <div className='menudash hover:bg-slate-200'>
        <FcSettings />
        <span className='hidden xl:block'>Settings</span>
      </div>
      <div className='menudash hover:bg-slate-200'>
        <MdHelpCenter />
        <span className='hidden xl:block'>Help</span>
      </div>
      <div className='menudash mt-[400px] hover:bg-slate-200'>
        <MdHelpCenter />
        <span className='hidden xl:block'>Help</span>
      </div>
    </div>
  )
}

export default Menu
