import React, { useContext, useEffect, useState } from 'react'
import { Darking } from './DarkingContext'
import { Counter } from './CounterContexet'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function Navbar() {
    const { isDark, ToggleDark } = useContext(Darking)
    const [cat, setcategory] = useState([])
    const { count } = useContext(Counter)
    const [search, setSeacrh] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const seacrhing = () => {
        navigate(`/details-product/${search}`)
    }
    async function category() {
        const respone = await axios.get("https://fakestoreapi.com/products/categories")
        // setProduct(respone.data)
        setcategory(respone.data)
        console.log(cat)
    }
    useEffect(() => {
        category()
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link to={'/'} className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/About'} className="nav-link" href="#">About</Link>
                            </li>

                            {cat.map(title => 
                                 (
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/cat/${title}`}>{title}</Link>
                                    </li>
                                )
                            )}

                        </ul>
                        <button className='btn btn-light'><i className="fa-solid fa-basket-shopping"></i>{count}</button>
                        <button className='btn btn-primary ms-3' onClick={ToggleDark}>{
                            <div>
                                {isDark ? <i className="fa-solid fa-sun" /> : <i className="fa-solid fa-moon" />}
                            </div>
                        }</button>
                        <form className="d-flex my-2 my-lg-0 ms-3">
                            <input value={search} onChange={(e) => setSeacrh(e.target.value)} className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button onClick={seacrhing} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}
