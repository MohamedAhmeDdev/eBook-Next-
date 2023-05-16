import React, { useState } from 'react'

function Footer() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (fullName.length === 0 || email.length === 0 || text.length === 0) {
      setError('All Input Must Not Be Empty');
    } else {
      console.log('jhg');
    }
  };

  return (
    <div className="container-md" id='contact'>
      <div className='row justify-content-around align-items-center'>
        <div className='col-md-5 my-2'>
          <h3 className='fw-bolder'>eBook</h3>
          <p className='fw-light'>eBook is an online platform, people can access it online and its has variety of books you can read</p>
          <p>Read . Explore . Read</p>
        </div>

        <form  onSubmit={formSubmit} className='col-md-5 my-2'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea value={text}  onChange={(e) => setText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
          
        {error && <p className='text-danger'>{error}</p>}
        <button type="submit" className="btn btn-lg btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Footer