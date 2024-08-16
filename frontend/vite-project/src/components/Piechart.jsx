import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto"
import '../App.css'

const Piechart = ({ selectedMonth, responses}) => {

  function getMonthName(monthNumber) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[monthNumber - 1]
  }

  function getCategoryRange(category) {
    if (category === "men's clothing") return "men's clothing"
    if (category === "jewelery") return "jewelery"
    if (category === "electronics") return "electronics"
    if (category === "women's clothing") return "women's clothing"
  }

  const categoryRangesCount = {
    "men's clothing": 0,
    "jewelery": 0,
    "electronics": 0,
    "women's clothing": 0,
  }

  responses.forEach(product => {
    const range = getCategoryRange(product.category)
    categoryRangesCount[range] += 1
  })

  return (
    <div className='pie'>
      <p>Pie Chart - {getMonthName(selectedMonth)}</p>
      <Pie 
        data={{
          labels: Object.keys(categoryRangesCount),
          datasets: [{
            label: 'Number of Items',
            data: Object.values(categoryRangesCount),
            backgroundColor: [
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(205, 215, 150)',
              'rgb(255, 99, 132)'
            ],
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default Piechart
