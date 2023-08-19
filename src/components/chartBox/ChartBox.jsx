import { Link } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

const ChartBox = (props) => {
  return (
    <div className='flex h-full flex-col xl:flex-row'>
      <div className='flex-1 flex flex-col justify-between gap-5  '>
        <div className='flex items-center gap-2'>
          <img src={props.icons} alt='' />
          <span className=''>{props.title}</span>
        </div>
        <h1 className='xl:[20px] font-bold'>{props.number}</h1>

        <Link to='/' style={{ color: props.color }}>
          View All
        </Link>
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        <div className='w-full h-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke='#8884d8'
                strokeWidth={props.color}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className='flex flex-col text-right'>
          <span
            className='text-bold text-2xl'
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}
          </span>
          <span className='text-[14px]'>this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox
