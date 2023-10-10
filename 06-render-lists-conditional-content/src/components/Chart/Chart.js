import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart({dataPoints}) {
  console.log(dataPoints)
  const totalMaxValue = dataPoints.reduce((prev, curr) => {
    return prev.value < curr.value ? curr : prev
  }, { value: 0 }).value

  return (
    <div className='chart'>
      {
        dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
          />
        ))
      }
    </div>
  )
}
