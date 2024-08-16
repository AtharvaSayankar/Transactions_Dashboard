import React from 'react'
import '../App.css'

const Statistics = ({ selectedMonth, stat }) => {


    function getMonthName(monthNumber) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]

        // Since monthNumber is 1-based (1 = January, 12 = December)
        return monthNames[monthNumber - 1]
    }

    return (
        <div className='statbox'>
            <p className='mg'>Statistics - {getMonthName(selectedMonth)}</p>
            <p className='mg'>Total Sold Items - {stat.soldLength}</p>
            <p className='mg'>Total Unsold Items - {stat.unsoldLength}</p>
        </div>
    )
}

export default Statistics
