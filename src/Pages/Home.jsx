import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import cartConstext from '../ContextApi/CartContext';


const Home = () => {
  let cartCtx = useContext(cartConstext)
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const [product, setproduct] = useState([]);
  const getAllData = async () => {
    setloading(true)
    try {
      let res = await axios.get('https://dummyjson.com/product/?limit=0&skip=0')
      let data = res.data.products
      setproduct(data)
      setloading(false)
    }
    catch (error) {
      console.log(error)
      seterror(true)
    }

  }

  useEffect(() => {
    getAllData()
  }, [])



  return (
    <div className='gradient-custom '>
      {loading ?
        (<div className="row m-0 p-0 p-0 justify-content-center gap-1">
          {Array(10).fill(0).map((e, i) => (
            <SkeletonTheme baseColor="#202020" highlightColor="#444" key={i}>
              <div className=" mb-4" style={{ width: '298px' }}>
                <Skeleton height={500} />
                <div className="d-flex justify-content-between">
                  <Skeleton width={100} height={50} />
                  <Skeleton width={100} height={50} />
                </div>
              </div>
            </SkeletonTheme>
          ))}
        </div>)
        :
       (<div>
         <div className='d-flex flex-wrap justify-content-around' style={{ marginTop: "90px" }}>

{
  product.map((ele, i) => {
    // console.log(ele)
    return <div className="card" style={{ width: '18rem', marginTop: '20px' }} key={i}>
      <img src={ele.thumbnail} className="card-img-top" alt="image loading" />
      <div className="card-body">
        <h5 className="card-title">{ele.title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Category:-</strong>{ele.category}</li>
        <li className="list-group-item"><strong>Price:- </strong>{ele.price}$</li>
        <li className="list-group-item"><strong>Discount:- </strong>{ele.discountPercentage}%</li>
      </ul>
      <div className="card-body">
        <Link to="/view" className="btn btn-success" state={ele}>View Detail</Link>
        <Link to="" className="btn btn-info mx-3" onClick={() => cartCtx.HandelAddtoCart(ele)}>Add to Cart</Link>
      </div>
    </div>

  })
}

</div>

<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


       </div>)

      }
    </div>
  )
}

export default Home
