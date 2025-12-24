import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Product from './Components/Product'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import { Darking } from './Components/DarkingContext'
import NotFound from './Components/NotFound'
import About from './Components/About'
// import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
import { ClipLoader } from 'react-spinners'
import Category from './Components/Category'

export default function App() {
  const [product, setProduct] = useState(null)
  // Swal.fire({
  //   title: 'Done',
  //   text: 'This is Spinner',
  //   timer: 2000,
  //   color: 'white',
  //   background: 'red'

  // })
  const { style } = useContext(Darking)
  async function retrive() {
    const respone = await axios.get("https://fakestoreapi.com/products")
    setProduct(respone.data)
  }
  useEffect(() => {
    retrive()
  }, [])

  return (
    <>
      <Helmet>
        <title>Home-Page</title>
      </Helmet>
      <Navbar />
      {product ? <div style={style}>
        <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={<Product data={product} />} />
              <Route path='/details-product/:id' element={<Details />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/About' element={<About />} />
              <Route path='/cat/:id' element={<Category/>}/>
            </Routes>
          </div>
        </div>
      </div>
        :
        <h2 className='text-center mt-5' >
          <ClipLoader color='green' />
        </h2>
      }


    </>
  )
}
