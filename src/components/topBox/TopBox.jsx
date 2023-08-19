import React from 'react'
import { topDealUsers } from '../../data'
const TopBox = () => {
  return (
    <div className='topBox'>
      <h1 className='text-2xl font-bold'>Top Deals</h1>
      <div className='list'>
        {topDealUsers.map((user) => (
          <div className='flex my-8 justify-between' key={user.id}>
            <div className='flex '>
              <img
                src={user.img}
                alt=''
                className='w-[50px] h-[50px] cover rounded-full mr-4'
              />
              <div className='flex flex-col'>
                <span className='font-bold'>{user.username}</span>
                <span className=''>{user.email}</span>
              </div>
            </div>
            <span className=''>${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
