import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineReload, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-4'>
      <div>
        <h1 className=' text-base font-semibold xl:text-2xl xl:font-bold'>
          PETERADMIN
        </h1>
      </div>
      <div className=' flex items-center gap-x-8 '>
        <div>
          <h1 className='hidden xl:text-[20px] xl:font-bold'>
            Good Morning, Peter Olatunji!
          </h1>
        </div>
        <div className='relative block'>
          <span class='sr-only'>Search</span>
          <span class='absolute inset-y-0 left-0 flex items-center pl-2'>
            <AiOutlineSearch className='h-5 w-5 fill-slate-300' />
          </span>
          <input
            class='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md xl:py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search'
            type='text'
            name='search'
          />
        </div>
        <div className='hidden xl:block'>
          <AiOutlineReload />
        </div>
        <div className='flex items-center'>
          <img
            src='https://media.istockphoto.com/id/1461053288/vector/3d-simple-user-icon-isolated.jpg?s=612x612&w=0&k=20&c=t0e3qdFUBoMktzkcf2FFptTF471_hdvFueSpOcn40eQ='
            alt=''
            className='w-[30px] h-[30px] rounded-full object-cover'
          />
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
