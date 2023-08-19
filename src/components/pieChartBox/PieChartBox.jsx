import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Mobile', value: 400, color: '#0088FE' },
  { name: 'Desktop', value: 300, color: '#00C49F' },
  { name: 'Laptop', value: 300, color: '#FFBB28' },
  { name: 'Tablet', value: 200, color: '#FF8042' },
]

const PieChartBox = () => {
  return (
    <div className=' h-full flex flex-col '>
      <h1 className='mb-5 text-xl'>Leads by Source</h1>
      <div className='w-full h-full '>
        <ResponsiveContainer width='99%' height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: 'white', borderRadius: '5px' }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='flex justify-between gap-3 items-center'>
        {data.map((item) => (
          <div
            className='hidden xl:flex flex-col items-center gap-3 '
            key={item.name}
          >
            <div className='flex items-center gap-2 text-xl'>
              <div
                className='w-3 h-3 rounded-full'
                style={{ backgroundColor: item.color }}
              />
              <span className='text-base'>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChartBox
