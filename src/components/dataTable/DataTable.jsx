import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

const DataTable = (props) => {
  const handleDelete = (id) => {
    console.log(id + 'deleted')
  }

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <div className='flex items-center gap-x-4'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img
              src='/view.jpg'
              alt=''
              className='w-[25px] h-[25px] cover rounded-full'
            />
          </Link>
          <div
            className='flex items-center gapx-2'
            onClick={() => handleDelete(params.row.id)}
          >
            <img
              src='/delete.png'
              alt=''
              className='w-[25px] h-[25px] cover rounded-full'
            />
          </div>
        </div>
      )
    },
  }
  return (
    <div className='bg-white p-4'>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default DataTable
