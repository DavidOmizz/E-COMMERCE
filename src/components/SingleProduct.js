import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../inc/ProductData'
import { BsCartPlus } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';

function SingleProduct({item}) {
    const {photo, name, price, id} = item
    const dispatch = useDispatch()
    // const product = useSelector(store=>store)

    function addCart() {
        dispatch({type: 'addCart', payload:item})
    }

  return (
    <div className='mt-3 card-deck'>
        <div class="card" style={{height: 'auto', width: ''}}>
            <div>
                <div >
                <img src={require(`../images/${photo}`)} class="card-img-top" alt={name}  />
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title" style={{textOverFlow:'ellipsis', overflow: 'hidden', whiteSpace:'nowrap' }}>{name}</h5>
                <p>₦{price}</p>
                <a href="#" class="btn btn-primary" onClick={addCart}><BsCartPlus size='1.5rem'/>Add to cart</a>
                <Link to={`/store/${id}`} className='btn btn-warning m-2' >View</Link>
            </div>
                {/* <img src={require(`../images/${photo}`)} class="card-img-top" alt={name}  />
					<div class="card-body">
					  <h4 class="card-title b-0 px-0">Card title</h4>
					  <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					  <div class="card-footer justify-content-between d-flex">
						<span class="text-muted">Last updated 3 mins ago</span>
						<span>
							<i> <FaStar className='star-icon'/></i>
							<i> <FaStar className='star-icon'/></i>
							<i> <FaStar className='star-icon'/></i>
							<i> <FaStarHalf className='star-icon'/></i>
							<i class="fa fa-star-half text-warning"></i>
							<span class="text-muted ml-2">(12)</span>
						</span>
					  </div> */}
        </div>
    </div>
  )
}

export default SingleProduct