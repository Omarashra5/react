import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
    const [product, setProduct] = useState([])
    async function select() {
        const respone = await axios.get("https://fakestoreapi.com/products")
        setProduct(respone.data)
    }
    useEffect(() => {
        select()
    }, [])
    return (
        <>
            <Helmet>
                <title>About-Page</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    {
                        product.map((pro) => (
                            <div className="col-3">
                                <div className="card p-3 mt-3">
                                    <img src={pro.image} height={200} alt="" />
                                    <h2>{pro.title.substring(0, 10)}</h2>
                                    <p>{pro.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
