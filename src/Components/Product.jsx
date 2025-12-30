import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from './CounterContexet'

export default function Product({data}) {
    const { inc } = useContext(Counter)
  return (
    <>
        {
            data.map((pro)=>(
                <div className="col-md-3 col-lg-6 col-sm-3">
                    <div className="card p-3 mt-3">
                        <img src={pro.image} height={200} alt="" />
                        <h2>{pro.title.substring(0,10)}</h2>
                        <p>{pro.price}</p>
                        <Link to={`/details-product/${pro.id}`} className='btn btn-warning'>Show More</Link>
                        <button className='btn btn-primary mt-2' onClick={inc}>Add Cart</button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

