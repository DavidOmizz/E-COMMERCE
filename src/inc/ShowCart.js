import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import MyCart from './MyCart'
// import data from './ProductData'

function ShowCart() {
    const cartObj = useSelector(store=>store)
    const cartList = cartObj.cartitem;
    console.log(cartList);
    // const {id} = cartList
    // console.log(countobj.count);
    // const [data, setData] = useState(countobj)
    const dispatch = useDispatch ()


  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table class="table table-responsive  table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Photo</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Price</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>

            {cartList.map((cart, i) => {
                
              return (
                <tbody>
                  <tr>
                    <th scope="row">
                        {i + 1}
                    </th>
                    <td><img src= {require(`../images/${cart.photo}`)} alt="" width={100} height={100} style={{ borderRadius: '8px' }}/></td>
                    <td>{cart.name}</td>
                    <td>₦{cart.price}</td>
                    <td>
                      <button onClick={()=>dispatch({type: "delCart", payload: cart})} className="btn btn-danger">Delete</button>
                      <Link to={`/store/${i + 1}`} className='btn btn-warning m-2' >View</Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowCart