const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fetchData = require('./myApi')
const app = express()
app.use(cors())
app.use(express.json())

let data


// monthly data api
app.get('/api/products/:month', async (req, res) => {
    try {
        // If data is not initialized yet
        if (!data) {
            data = await fetchData() // Fetch data if not already available
        }

        const month = parseInt(req.params.month, 10) // to convert from string url to number

        const filtered = data.filter(obj => {
            const saleDate = new Date(obj.dateOfSale)
            return saleDate.getMonth() + 1 === month
        })

        const unsoldProducts = filtered.filter(product => !product.sold) // usold products
        const soldProducts = filtered.filter(product => product.sold) // sold products

        let unsoldLength = unsoldProducts.length // number of unsold products
        let soldLength = soldProducts.length // number of sold products

        res.json({filtered, unsoldLength, soldLength})
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data' })
    }
})


// search api
app.get('/api/users/:search', async (req, res) => {
    
    const mySearch = String(req.params.search)
    
    if (!data) {
        // If data is not initialized yet
        try {
            data = await fetchData() // Fetch data if not already available
        } catch (error) {
            return res.status(500).send({ error: 'Failed to fetch data' })
        }
    }

    let results = data.filter(user => 
        user.id === parseInt(mySearch) || // search by id
        user.title.toLowerCase().includes(mySearch.toLowerCase()) || // search by title
        user.description.toLowerCase().includes(mySearch.toLowerCase())|| // search by description
        user.category.toLowerCase().includes(mySearch.toLowerCase())|| // search by category
        user.price === parseFloat(mySearch) // search by price
    )

    if (results) {
        return res.json(results)
    } else {
        return res.status(404).send({ error: 'User not found' })
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})


// app.get('/api/users', async (req, res) => {
//     try {
//         // If data is not initialized yet
//         data = await fetchData() // Fetch data if not already available
//         res.send(data)
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to fetch data' })
//     }
// })