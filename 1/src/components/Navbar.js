import React from "react"
import '../style.css'
import logo from '../images/logo192.png'


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React - Project 1</h4>
        </nav>
    )
}