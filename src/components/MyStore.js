import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../inc/ProductData'
import SingleProduct from './SingleProduct'
// import { fa-magnifying-glass} from 'react-icons/fa';
// import { FaSearch } from "react-icons/fa";

function MyStore() {

    const productObj = useSelector(store => store)
    // console.log(productObj);

    const [searchKey, setSearchKey] = useState('')

    const [itemList, setItemList] = useState(productObj.items)

    const productCount = useSelector(store => store)

    const filterItems = (e)=>{
        const holdFilter = productObj.items
        const getFilter = holdFilter.filter(item=>item.category.toLowerCase().includes(searchKey.toLowerCase()))
        setItemList(getFilter)
        // if (getFilter){
        //     return setItemList(getFilter)
        // }
        // else {
        //     return setItemList("No item found")
        // }
    }
    // console.log(itemList);

    // const [product, setProduct] = useState(data)
    // const product = useSelector(store=>store)
    // console.log(product)

    const filterCategory = (item)=>{
        const holdCat = productObj.items
        const result = holdCat.filter((curData)=>{
            return curData.gender===item;
        })
        setItemList(result);
    }

  return (
    <div className='container-fluid'>
        <div className='row justify-content-center'>
        <p>The number of items in your cart are: {productCount.cartitem.length} </p>
            <form onKeyUp={filterItems}>
                <div class="mb-3 col-md-6 col-6 d-flex mx-auto mt-3">
                    <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Search"/>
                    {/* <button className='btn btn-danger' type='submit'><i><FaSearch/></i></button> */}
                </div>
                    {/* <button className='btn btn-dark m-2' onClick={()=>filterCategory()}>ALL</button> */}
                   
            </form>
            <div className='col-md-3 text-center'>
                <button className='btn btn-outline-warning m-2' onClick={()=>setItemList(productObj.items)}>All</button>
                <button className='btn btn-outline-warning m-2' onClick={()=>filterCategory('Women')}>Women</button>
                <button className='btn btn-outline-warning m-2' onClick={()=>filterCategory('Men')}>Men</button>
            </div>
            <div className='row'>
            {
                itemList.map((item)=>{
                    return(
                        <div className='col-md-3'>
                            <SingleProduct item = {item}/>
                        </div>
                    )
                })
            }
            </div>

        </div>
    </div>
  )
}

export default MyStore

