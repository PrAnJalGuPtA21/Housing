import React from "react"
import { NavLink } from "react-router-dom"
import Hero from "../Hero/Hero"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Housing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="feature" className="nav-link" >Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="pricing" className="nav-link" >Pricing</NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Hero />
        </>
    )
}

export default Navbar