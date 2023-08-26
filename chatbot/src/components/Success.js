import React from 'react'
import { useSelector } from 'react-redux'

function Success() {

    const name=useSelector((state)=>state.name)
    const age=useSelector((state)=>state.age)

    return (
        <div><h3>Your name {name} aged {age} has been added to student system. You may now exit.</h3></div>
    )
}

export default Success