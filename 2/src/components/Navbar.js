import React from "react"
import '../style.css'
import logo from '../images/airbnb1.png'


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />

        </nav>
    )
}