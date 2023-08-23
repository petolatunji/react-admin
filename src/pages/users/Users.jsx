import { useState } from 'react'

import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data'
import Add from '../../components/add/Add'
import { Link } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Image',
    width: 90,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || '/images.jpg'}
          alt=''
          className='w-[32px] h-[32px] cover rounded-full'
        />
      )
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    editable: true,
  },
]

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='block xl:hidden'>
        <h1 className='font-bold text-red-500 animate-bounce  h-10 '>
          NOT AVAILABLE ON MOBILE VIEW
        </h1>
        <Link to='/users/1' className='bg-blue-500 text-white p-2 rounded-md'>
          Link to Single User
        </Link>
      </div>
      <div className=''>
        <div className=' items-center gap-x-[20px] mb-[20px] hidden xl:flex '>
          <h1 className='font-bold text-2xl'>Users</h1>
          <button
            onClick={() => setOpen(true)}
            className='p-2 bg-blue-400 text-white rounded-md'
          >
            Add New User
          </button>
        </div>
        <DataTable slug='users' columns={columns} rows={userRows} />
        {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
      </div>
    </div>
  )
}

export default Users
