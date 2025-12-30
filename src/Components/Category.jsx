import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
    const { id } = useParams()
    const [category, setCategory] = useState([])
    async function cat() {
        const respone = await axios.get(`https://fakestoreapi.com/products/category/${id}`)
        setCategory(respone.data)
        console.log(category)
    }
    useEffect(() => {
        cat()
    }, [category])
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {
                        category.map((c) => {
                            return (
                                <div className="col-sm-3 col-md-6 col-lg-8">
                                    <div className="card p-3">
                                        <img src={c.image} height={'300px'} alt="" />
                                        <h2>{c.title.substring(0,10)}</h2>
                                        <p>{c.description.substring(0,20)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
