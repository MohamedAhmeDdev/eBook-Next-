import React, { useState } from 'react'
import axios from "axios"

function FormPage() {
    const[bookName, setBookName] = useState('')
    const[BookAuthor, setBookAuthor] = useState('')
    const[BookDescription, setBookDescription] = useState('')
    const[bookImage, setBookImage] = useState('')
    const[BookPrice, setBookPrice] = useState('')
    const[BookType, setBookType] = useState('')


    const submitForm = async(e) =>{
        e.preventDefault();

        const formData = new FormData()
        formData.append('bookName', bookName)
        formData.append('BookAuthor', BookAuthor)
        formData.append('BookDescription', BookDescription)
        formData.append('bookImage', bookImage)
        formData.append('BookPrice', BookPrice)
        formData.append('BookType', BookType)

        await axios.post('http://localhost:5000/books', formData)
    }


  return (
   <form  onSubmit={submitForm} method="POST" encType='multipart/form-data'>
       <div className="container-md" id='contact'>
          <div className='row justify-content-around align-items-center'>
               <div className='col-md-6 col-xxl-7 my-2'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">BookName</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={bookName} onChange={(e)=> setBookName(e.target.value)} placeholder="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">BookAuthor</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={BookAuthor} onChange={(e)=> setBookAuthor (e.target.value)} placeholder="BookAuthor"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={BookDescription} onChange={(e)=> setBookDescription(e.target.value)} placeholder="Description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">BookImage</label>
                        <input type="file" className="form-control" id="exampleFormControlInput1" onChange={(e)=> setBookImage(e.target.files[0])} placeholder="BookImage"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" value={BookPrice} onChange={(e)=> setBookPrice(e.target.value)} placeholder="Price"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">BookType</label>
                    <select className="form-select mb-3" value={BookType} onChange={(e)=> setBookType(e.target.value)} aria-label="Default select example">
                        <option defaultValue>BookType</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>

                    <button type="submit" class="btn btn-lg btn-info">Dark</button>
              </div>
           </div>
       </div>
   </form>
  )
}

export default FormPage