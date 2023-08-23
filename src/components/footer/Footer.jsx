import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-blue-500 text-white pt-8 pb-4 gap-y-2'>
      <div className='flex items-center gap-x-4 text-2xl'>
        <Link to='https://www.linkedin.com/in/babatunde-olatunji-peter-1b5181119/'>
          <BsLinkedin />
        </Link>
        <Link to='https://github.com/petolatunji' target='_blank'>
          <BsGithub />
        </Link>

        <Link to='https://twitter.com/petolatunji' target='_blank'>
          <BsTwitter />
        </Link>
      </div>
      <div className='flex items-center gap-x-4 my-4 text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/products'>Products</Link>
      </div>
      <div>@2023 petolatunji | All Right Reserved</div>
    </div>
  )
}

export default Footer
