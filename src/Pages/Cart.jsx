import React, { useContext } from 'react'
import cartConstext from '../ContextApi/CartContext' 
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

const Cart = () => {
  let cartCtx = useContext(cartConstext)

  let totalSum = 0;
  let totalDiscount = 0
  cartCtx.cartArr.forEach((ele) => {
    totalSum = totalSum + ele.price;
    let discount = ele.price * ele.discountPercentage / 100;
    totalDiscount = totalDiscount + discount

  })
  const HandelIncrement = (ele, i) => {
    if (ele.quantity >= ele.minimumOrderQuantity) {
      toast.success('you reached order max quantity')
      return
    }
    else {
      let copyArr = [...cartCtx.cartArr]
      let UpdateEle = {
        ...ele,
        quantity: ele.quantity + 1,
        price: ele.price + ele.price / ele.quantity
      }
      copyArr[i] = UpdateEle
      cartCtx.setcartArr(copyArr)
    }

  }
  const HandelDecrement = (ele, i) => {
    if (ele.quantity <= 1) {
      return
    } else {
      let copyArr = [...cartCtx.cartArr]
      let UpdateEle = {
        ...ele,
        quantity: ele.quantity - 1,
        price: ele.price - ele.price / ele.quantity
      }
      copyArr[i] = UpdateEle
      cartCtx.setcartArr(copyArr)
    }

  }

  return (
    <div style={{ marginTop: "90px" }}>
      <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: 15 }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                      {cartCtx.cartArr.map((product, index) => {
                        console.log(product)
                        return <div className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <img src={product.thumbnail} className="img-fluid" style={{ width: 150 }} alt="Generic placeholder image" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                          <h5 className="text-primary">{product.title}</h5>
                            <div className=' d-md-flex justify-content-between align-items-center'>
                              <div className='col-6'>
                                <a href="#!" className="float-end"><i className="fas fa-times" /></a>
                                
                                <h6 style={{ color: '#9e9e9e' }}>{product.brand}</h6>
                              </div>
                              <div className="def-number-input number-input safari_only">
                               
                                <button onClick={() => { HandelDecrement(product, index) }} className='minus' />
                                <input className="quantity fw-bold bg-body-tertiary text-body" min={0} name="quantity" Value={product.quantity} type="number" />
                
                                <button onClick={() => { HandelIncrement(product, index) }} className='plus' />
                              </div>
                            </div>
                            <div className="d-md-flex align-items-center">
                              <p className="fw-bold mb-0 me-4 mb-md-1 pe-3">Price:-{Math.ceil(product.price)}$</p><br />
                              <p className="fw-bold mb-0 me-4 pe-3">Discount:-{Math.ceil(product.discountPercentage)}%</p>
                              <button onClick={()=>{cartCtx.HandelRemovetoCart(product, index)}} className='btn btn-danger'>Remove</button>
                              

                            </div>
                          </div>
                        </div>
                      })}

                      <hr className="mb-4" style={{ height: 2, backgroundColor: '#1266f1', opacity: 1 }} />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Price:</p>
                        <p className="fw-bold">{Math.ceil(totalSum)}$</p>
                      </div>
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">{Math.ceil(totalDiscount)}$</p>
                      </div>
                      <div className="d-flex justify-content-between p-2 mb-2 bg-primary text-light">
                        <h5 className="fw-bold mb-0">Total Pay:</h5>
                        <h5 className="fw-bold mb-0">{Math.ceil(totalSum) - Math.ceil(totalDiscount)}$</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                      <form className="mb-5">
                        <div data-mdb-input-init className="form-outline mb-5">
                          <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder='**** **** **** ****' minLength={19} maxLength={19} />
                          <label className="form-label" htmlFor="typeText">Card Number</label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-5">
                          <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder='Enter your name' />
                          <label className="form-label" htmlFor="typeName">Name on card</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="typeExp" className="form-control form-control-lg" placeholder='**/**' size={7} minLength={7} maxLength={7} />
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div data-mdb-input-init className="form-outline">
                              <input type="password" id="typeText" className="form-control form-control-lg" placeholder='●●●' size={1} minLength={3} maxLength={3} />
                              <label className="form-label" htmlFor="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a href="#!">obcaecati sapiente</a>.</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block btn-lg">Buy now</button>
                        <h5 className="fw-bold mb-5" style={{ position: 'absolute', bottom: 0 }}>
                          <Link to="/"><i className="fas fa-angle-left me-2" />Back to shopping</Link>
                        </h5>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
