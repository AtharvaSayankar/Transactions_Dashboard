import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import '../App.css'

const Barchart = ({ selectedMonth, responses }) => {

  
  function getMonthName(monthNumber) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[monthNumber - 1]
  }

  // Function to determine the price range
  function getPriceRange(price) {
    if (price <= 100) return '0-100'
    if (price <= 200) return '101-200'
    if (price <= 300) return '201-300'
    if (price <= 400) return '301-400'
    if (price <= 500) return '401-500'
    if (price <= 600) return '501-600'
    if (price <= 700) return '601-700'
    if (price <= 800) return '701-800'
    if (price <= 900) return '801-900'
    return '900 & above'
  }

  // Count the number of products in each price range
  const priceRangesCount = {
    "0-100": 0,
    "101-200": 0,
    "201-300": 0,
    "301-400": 0,
    "401-500": 0,
    "501-600": 0,
    "601-700": 0,
    "701-800": 0,
    "801-900": 0,
    "900 & above": 0,
  }

  responses.forEach(product => {
    const range = getPriceRange(product.price)
    priceRangesCount[range] += 1
  })


  return (
    <div className='bar'>
      <p>Bar Chart - {getMonthName(selectedMonth)}</p>
      <Bar
        data={{
            labels: Object.keys(priceRangesCount),
            datasets: [{
              label: "Number of Products",
              data: Object.values(priceRangesCount),
            }]
          }}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  )
}

export default Barchart
