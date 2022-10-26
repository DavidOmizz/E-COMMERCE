import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../inc/ProductData'
import { BsCartPlus } from 'react-icons/bs';

function SingleProduct({item}) {
    const {photo, name, price, id} = item
    const dispatch = useDispatch()
    // const product = useSelector(store=>store)

    function addCart() {
        dispatch({type: 'addCart', payload:item})
    }

  return (
    <div className='mt-3'>
        <div class="card" style={{height: 'auto', width: '20rem'}}>
            <div>
                <div >
                <img src={require(`../images/${photo}`)} class="card-img-top" alt={photo}  />
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title" style={{textOverFlow:'ellipsis', overflow: 'hidden', whiteSpace:'nowrap' }}>{name}</h5>
                <p>₦{price}</p>
                <a href="#" class="btn btn-primary" onClick={addCart}><BsCartPlus size='1.5rem'/>Add to cart</a>
                <Link to={`/store/${id}`} className='btn btn-warning m-2' >View</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct