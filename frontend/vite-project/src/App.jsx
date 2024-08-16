import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Input from './components/Input'
import Dropdown from './components/Dropdown'
import Table from './components/Table'
import Statistics from './components/Statistics'
import Barchart from './components/Barchart'
import Piechart from './components/Piechart'


function App() {

  const [selectedMonth, setSelectedMonth] = useState() // for storing month
  const [search, setSearch] = useState() // for storing search
  const [stat, setStat] = useState([]) // for sold , unsold
  const [responses, setResponses] = useState([]) // for filtered responses array

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleMonthChange(event) {
    const selectedMonth = parseInt(event.target.value, 10)
    setSelectedMonth(selectedMonth)
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${selectedMonth}`)
    .then(result => {
      setStat(result.data)
      const filteredResponses = result.data.filtered // Get monthly filtered array
      setResponses(filteredResponses)
    })
    .catch(err => {console.log(err)})
  }, [selectedMonth])

  useEffect(() => {
    if (search) {
      axios.get(`http://localhost:3001/api/users/${search}`) // to search by keyword / id / title
      .then(result => setResponses(result.data)) // store search results
      .catch(err => {
        console.log(err)
        setResponses([]) // Clear the table if the search fails
      })
    } 
    // else {
    //   filterByMonth(selectedMonth) // If no search, filter by month
    // }
  }, [search, selectedMonth])


  return (
    <>
      <div>
        
        <h1 className='center title'>Transactions Dashboard</h1>
        <div className="center_search">          
          <Input search={search} handleSearch={handleSearch} />
          <Dropdown selectedMonth={selectedMonth} handleMonthChange={handleMonthChange} />
        </div>

      </div>
      
      <Table responses={responses} />

      <div className='center_stat'>
        <Statistics selectedMonth={selectedMonth} stat={stat} />
        <Barchart selectedMonth={selectedMonth} responses={responses} />
        <Piechart  selectedMonth={selectedMonth} responses={responses} />
        <h4 className='footer'>© Atharva Sayankar</h4>
      </div>

    </>
  )
}

export default App



// const [objects, setObjects] = useState([])
// const [filteredObjects, setFilteredObjects] = useState([])

// function filterByMonth(month) {
//   const filtered = objects.filter(obj => {
//     const saleDate = new Date(obj.dateOfSale)
//     return saleDate.getMonth() + 1 === month
//   })
//   setFilteredObjects(filtered)
// }

// useEffect(() => {
//   axios.get('http://localhost:3001/api/users') // to load all the list
//   .then(result => setObjects(result.data))
//   .catch(err => console.log(err))
//   // filterByMonth(selectedMonth)
//   }, [selectedMonth]
// )