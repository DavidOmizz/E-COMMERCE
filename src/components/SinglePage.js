import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import data from '../inc/ProductData';


function SinglePage() {
    const {id} = useParams();

    // To bring in our reducer 
    const productObj = useSelector(store => store)

    // const [itemList, setItemList] = useState(productObj.items)

    const findProduct = productObj.items

    // To find and get the product  by id
    const myProduct = findProduct.find((oneProduct)=> oneProduct.id === Number(id))
    const {name, price, photo, info} = myProduct
    console.log(myProduct)

    const [read, setRead] =useState(false)
    const readMe = ()=>{
      setRead(!read)
    }

   

  return (
      <div className='cotainer'>
        <div className='row justify-content-center shadow bg-body rounded'>
        <div className='col-md-4 col-10 m-5 shadow  bg-body rounded mt-5 '>
          <img className='p-3 image-fluid' src={require(`../images/${photo}`)} alt='' width={400} height={400} />
          <h2>{name}</h2>
          <p>₦{price}</p>
        </div>
        <div className='col-md-6 mt-2 p-5'>
        <h2>{name}</h2>
            <p>{read ? info : `${info.substring(0, 20)}` }</p>
            <button onClick={readMe} className='btn btn-primary'>{read ? "Read less" : "Read more"}</button>
        </div>
    </div>
      </div>
  )
}

export default SinglePage