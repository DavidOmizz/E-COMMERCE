import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import data from '../inc/ProductData';
import { BsCartPlus } from 'react-icons/bs';


function SinglePage() {
    const {id} = useParams();

    // To add cart
   
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
    //   <div className='cotainer'>
    //     <div className='row justify-content-center'>
    //     <div className='col-md-5 col-10 shadow bg-body rounded mt-4 mb-4' style={{justifyItems:'center'}}>
    //       <img className='image-fluid' src={require(`../images/${photo}`)} alt=''/>
    //       <h2>{name}</h2>
    //       <p>₦{price}</p>
    //     </div>
        // <div className='col-md-6 mt-2 p-5'>
        //     <h2>{name}</h2>
        //     <p>{read ? info : `${info.substring(0, 20)}` }</p>
        //     <button onClick={readMe} className='btn btn-primary'>{read ? "Read less" : "Read more"}</button>
        // </div>
    // </div>
    //   </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 mt-5 '>
          <div class=" shadow bg-body rounded p-3 " style={{height: 'auto', width: ''}}>
                <div>
                    <div >
                    <img src={require(`../images/${photo}`)} class="card-img-top card-img-top-single-page m-3" alt={name}  />
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title" style={{textOverFlow:'ellipsis', overflow: 'hidden', whiteSpace:'nowrap' }}>{name}</h5>
                    <p>₦{price}</p>
                </div>
                
          </div>
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