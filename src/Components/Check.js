import React from 'react'
import { Redirect } from "react-router-dom"

const Check = () => {
    localStorage.removeItem('token');
    return <Redirect to="/" />
}

export default Check

