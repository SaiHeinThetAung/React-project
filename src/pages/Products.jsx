import React, { useContext } from 'react'
import { UseCon } from '../context/StateContext'
import Card from '../components/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/loading/loader';
const Products = () => {
  const {state:{products}}=UseCon()

  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20 mb-5'>
      {products.length>0?(products.map(pd=>(<Card key={pd.id} product={pd} />))):<Loader/>
      }   
     
    </div>
  )
}

export default Products
