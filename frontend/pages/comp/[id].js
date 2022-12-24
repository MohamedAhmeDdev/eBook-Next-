import { useState } from 'react'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/books');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:5000/books/' + id);
  const data = await res.json();

  return {
    props: { user: data }
  }
}


  const bookInfo = ({ user }) => {
    const [free] = useState('free');

  return (
   <div className='container-xxxl'>
      <div className='row justify-content-center align-items-center my-5'>
        
        <div className='col-md-5  shadow'>
          <img className="mx-auto d-block imgId my-2 img-fluid"  src={`http://localhost:5000/${user.bookImage}`} alt="" />
        </div>

         <div className='col-md-4 d-block'>
             <div className="container card text-center info border border-top-0">
             <div className="card-header">Description</div>
                <div className="row">
                  <div className="col">{user.BookDescription}</div>
                </div>
             </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className="card list-card border border-end-0 my-2">
                    <div className="card-header">List </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item ">Book Name:</li>
                        <li className="list-group-item ">Book Author:</li>
                        <li className="list-group-item  ">Book Type:</li>
                        <li className="list-group-item ">Book Price:</li>
                        <li className="list-group-item ">Read:</li>
                    </ul>
                </div>
                <div className="card list-card border my-2">
                    <div className="card-header">Features</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item  text border border-top-0 border-bottom-0">{user.bookName}</li>
                        <li className="list-group-item  text border border-top-0 border-bottom-0">{user.BookAuthor}</li>
                        <li className="list-group-item border border-top-0 border-bottom-0">{user.BookType}</li>
                        <li className="list-group-item border border-top-0 border-bottom-0">{user.BookPrice}</li>
                        <li className="list-group-item border border-top-0 border-bottom-0"><button type="button" className={user.BookPrice == free? "btn btn-primary btn-sm" : "btn btn-danger btn-sm disabled"}>Read</button></li>
                    </ul>
                </div>
           </div>
        </div>

      </div>
   </div>
  )
}

export default bookInfo;