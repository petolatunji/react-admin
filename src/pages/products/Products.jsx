import { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add'
import { products } from '../../data'
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
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
]

const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='block xl:hidden'>
        <h1 className='font-bold text-red-500 animate-bounce  h-10 '>
          NOT AVAILABLE ON MOBILE VIEW
        </h1>
        <Link
          to='/products/1'
          className='bg-blue-500 text-white p-2 rounded-md'
        >
          Link to Single Product
        </Link>
      </div>
      <div className=''>
        <div className=' items-center gap-x-[20px] mb-[20px] hidden xl:flex '>
          <h1 className='font-bold text-2xl'>Products</h1>
          <button
            onClick={() => setOpen(true)}
            className='p-2 bg-blue-400 text-white rounded-md'
          >
            Add New Products
          </button>
        </div>
        <DataTable slug='products' columns={columns} rows={products} />
        {open && <Add slug='products' columns={columns} setOpen={setOpen} />}
      </div>
    </div>
  )
}

export default Products
