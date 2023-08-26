import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div><h3>Enter into Student Info System</h3>
            <Link to="/chatbot"><button className='start-btn'>Enroll Now!</button></Link></div>
    )
}

export default Homepage