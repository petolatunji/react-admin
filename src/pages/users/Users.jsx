import { useState } from 'react'

import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data'
import Add from '../../components/add/Add'

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
    <div className=''>
      <div className='flex items-center gap-x-[20px] mb-[20px]'>
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
  )
}

export default Users
