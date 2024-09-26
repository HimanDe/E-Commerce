
import { Link, useLocation } from 'react-router-dom'
import user from '../Component/user.jpg'

const ViewProduct = () => {

  const location = useLocation()
  console.log(location)
  let str = '';
  for (let i = 0; i < location.state.rating; i++) {
    str = str + "⭐";

  }
  console.log(str)
  return (
    <div style={{marginTop:"90px"}}>
      <div className="card mb-3 m-auto" style={{ maxWidth: "940px", margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={location.state.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body text-md-center">
              <h5 className="card-title">{location.state.title}</h5>
              <p className="card-text my-5">{location.state.description}</p>
              <p className="card-text"><small className="text-body-secondary">Last updated few mins ago</small></p>
              <Link to="#" className="btn btn-info mx-3">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>


      <div className=" " style={{ maxWidth: "540px", margin: "auto", textAlign: "center" }}>
        <h5><strong>Price:- </strong>{location.state.price}$</h5>
        <h5 className='my-4'><strong>Category:- </strong>{location.state.category}</h5>
        <h5><strong>Rating:- </strong>{str}</h5>
      </div>
      <div className=" text-md-center" >
        <img src={location.state.meta.qrCode} className="card-img-top" alt="..." style={{ width: '18rem', margin:"auto"}} />
        <div className="card-body">
          <h5 className="card-title"><strong>Barcode:- </strong>{location.state.meta.barcode}</h5>
          <h5 className="card-title my-4"><strong>Created Date:- </strong>{location.state.meta.createdAt}</h5>
          <h5 className="card-title my-4"><strong>Updated Date:- </strong>{location.state.meta.updatedAt}</h5>
        </div>
      </div>

      <table className="table " style={{ width: "750px", margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">1.</th>
            <th scope="col">Warranty Information</th>
            <td scope="col">{location.state.warrantyInformation}</td>
          </tr>
          <tr>
            <th scope="col">2.</th>
            <th scope="col">Return Policy</th>
            <td scope="col">{location.state.returnPolicy}</td>
          </tr>
          <tr>
            <th scope="col">3.</th>
            <th scope="col">Weight</th>
            <td scope="col">{location.state.weight * 100} gram</td>
          </tr>
          <tr>
            <th scope="col">4.</th>
            <th scope="col">Minimum Order Quantity</th>
            <td scope="col">{location.state.minimumOrderQuantity}</td>
          </tr>
          <tr>
            <th scope="col">5.</th>
            <th scope="col">Shipping Information</th>
            <td scope="col">{location.state.shippingInformation}</td>
          </tr>
          <tr>
            <th scope="col">6.</th>
            <th scope="col">In Stock</th>
            <td scope="col">{location.state.stock} item left</td>
          </tr>
          <tr>
            <th scope="col">7.</th>
            <th scope="col">Brand</th>
            <td scope="col">{location.state.brand} </td>
          </tr>
        </thead>
      </table>

      <div className=''>
        <div class="col-md-10 col-xl-8 text-center m-auto">
          <h3 class="mb-4">Custmer Review</h3>

        </div>
        <div className='d-flex flex-wrap justify-content-md-center gap-5 '>
          {location.state.reviews.map((ele) => {
            let str = '';
            for (let i = 0; i < ele.rating; i++) {
              str = str + "⭐";

            }
            return <section >
              <div class=" text-center ">
                <div class="mb-5 mb-md-0 ">
                  <div class="d-flex justify-content-center mb-4">
                    <img src={user}
                      class="rounded-circle shadow-1-strong" width="150" height="150" />
                  </div>
                  <h5 class="mb-3">{ele.reviewerName}</h5>
                  <h6 class="text-primary mb-3">{ele.reviewerEmail}</h6>
                  <h6 class="text-danger-emphasis mb-3">Rating:- {str}</h6>
                  <p class="px-xl-3">
                    <i class="fas fa-quote-left pe-2"></i>{ele.comment}
                  </p>
                  <ul class="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i class="fas fa-star fa-sm text-danger">{ele.date}</i>
                    </li>

                  </ul>
                </div>

              </div>
            </section>
          })}
        </div>
      </div>

    </div>
  )
}

export default ViewProduct
