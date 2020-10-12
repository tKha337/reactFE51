import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
           
   <div classname="bg-dark">
  <h1 classname="text-center text-white pd-1">BEST SMARTPHONE</h1>
  <div classname="row bg-dark">
    <div classname="col-3">
          <ProductItem/>
    </div>
      
    <div classname="col-3">
      <ProductItem/>
     </div>
    <div classname="col-3">
      <ProductItem/>
    </div>
    <div classname="col-3">
      <ProductItem/>
    </div>
  </div>
</div>


        )
    }
}
