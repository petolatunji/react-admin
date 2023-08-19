import React from 'react'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import ChartBox from '../../components/chartBox/ChartBox'
import TopBox from '../../components/topBox/TopBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from '../../data'

const Home = () => {
  return (
    <div className='px-2 xl:px-0 grid gap-5 grid-cols-1 grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-rows-[minmax(120px,auto)] overflow-hidden'>
      <div className='col-span-1 row-span-2 border-2 p-5 rounded-lg m'>
        <TopBox />
      </div>
      <div className=' border-2 p-5 rounded-lg'>
        <ChartBox {...chartBoxUser} />
      </div>

      <div className=' border-2 p-5 rounded-lg'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='col-span-1 row-span-2 border-2 p-5 rounded-lg'>
        <PieChartBox />
      </div>
      <div className='col-span-2 row-span-1 hidden xl:block border-2 p-5 rounded-lg'>
        <BigChartBox />
      </div>
      <div className='border-2 p-5 rounded-lg'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className=' border-2 p-5 rounded-lg'>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className='border-2 p-5 rounded-lg'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className=' border-2 p-5 rounded-lg'>
        <ChartBox {...chartBoxRevenue} />
      </div>
    </div>
  )
}

export default Home
