import React from 'react'

function Footer() {
  return (
    <div className="container-md" id='contact'>
      <div className='row justify-content-around align-items-center'>
        <div className='col-md-5 my-2'>
          <h3 className='fw-bolder'>eBook</h3>
          <p className='fw-light'>eBook is an online platform, people can access it online and its has variety of books you can read</p>
          <p>Read . Explore . Read</p>
        </div>

        <div className='col-md-5 my-2'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="button" className="btn btn-lg btn-dark">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer