const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.setOpen(false)
  }
  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0 bg-black-rgba flex items-center justify-center text-white'>
      <div className='p-[50px] rounded-md bg-slate-800 relative'>
        <span
          className='absolute right-[10px] top-2 cursor-pointer'
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className='mb-[40px] text-2xl text-center'>Add new {props.slug}</h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-wrap max-w-[500px] justify-between'
        >
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className='flex flex-col gap-2 mb-6'>
                <label className='text-base'>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  className='p-[10px] bg-transparent outline-0 border-2 rounded-md '
                />
              </div>
            ))}
          <button className='w-full p-2 bg-white text-slate-800 font-bold '>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
