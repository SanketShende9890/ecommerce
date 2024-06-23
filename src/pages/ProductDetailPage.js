import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/productDetails/component/ProductDetail'

const ProductDetailPage = () => {
  return (
    <>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
    </>
  )
}

export default ProductDetailPage