import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const SingleProduct = (props) => {
  return (
    <div className='flex flex-col xl:flex-row '>
      <div className='flex-1'>
        <div className=''>
          <div className='flex flex-col gap-5'>
            {props.img && (
              <img
                src={props.img}
                alt=''
                className='w-full h-full rounded-lg cover'
              />
            )}
            <div className='flex gap-2 my-4 items-center'>
              <h1 className='font-bold'>{props.title}</h1>
              <button className='p-2 bg-[#f45b69] text-white rounded-md'>
                Update
              </button>
            </div>
          </div>
          <div className='text-2xl gap-y-2'>
            {Object.entries(props.info).map((item) => (
              <div className=' my-0 mb-6 ' key={item[0]}>
                <span className='font-bold mt-3 capitalize mr-2'>
                  {item[0]}:
                </span>
                <span className='itemValue'>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className='w-[100%] h-0 border-2  my-2 hidden xl:block' />
        {props.chart && (
          <div className='mt-[50px] w-[80%] h-[400px] hidden xl:block'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type='monotone'
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className='flex-1 xl:ml-[50px]'>
        <h2 className='mb-[20px] font-bold mt-[20px] xl:mt-0'>
          Latest Activities
        </h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li
                key={activity.text}
                className='list-none relative w-[1px] pt-[50px] bg-[#f45b69] after:absolute after:left-[50%] after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#f45b69] after:-translate-x-[50]'
              >
                <div className='p-[15px] min-w-[250px] xl:min-w-[480px] bg-[#f45b6810]'>
                  <p className='mb-[5px]'>{activity.text}</p>
                  <time className='text-[12px]'>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SingleProduct
