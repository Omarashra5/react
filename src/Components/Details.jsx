import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'

export default function Details() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    async function retrive() {
        const respone = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(respone.data)
    }
    useEffect(() => {
        retrive()
    }, [])
    return (
        <>
          <Helmet>
                <title>Details-Page</title>
            </Helmet>
            <h1 className='text-center mt-3'>Details Product</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card p-3 mt-3">
                            <img src={product.image} alt="" />
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            <Link to={'/'} className='btn btn-primary'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
