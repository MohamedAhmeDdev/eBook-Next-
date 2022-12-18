import Image from 'next/image';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Book from "../public/h.jpg";
import Book2 from "../public/gg.jpg";

function CarouselComp() {
  return (
    <div>
     <Carousel variant="dark">
        <Carousel.Item className='row '>
         <div className='col-5 align-items-center'>
         <Image className="justify-content-center imageC"  src={Book} alt="First slide" />
         </div>
          <Carousel.Caption>
            <div className='mb-5 align-items-center d-none d-lg-inline'>
            <div>
            <h5>Books</h5>
            <p>individual the world take a different connotation of meaning,search for an answer.</p>
            </div>

            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='row '>
        <div className='col-5 align-items-center'>
         <Image className="justify-content-center imageC"  src={Book2} alt="First slide" />
         </div>
          <Carousel.Caption>
          <div className='mb-5 align-items-center d-none d-lg-inline'>
            <div>
            <h5>knowledge</h5>
            <p>Books provide us with knowledge, knowledge is what keeps as moving forward</p>
            </div>

            </div>
          </Carousel.Caption>
        </Carousel.Item>
   </Carousel>
    </div>
  )
}

export default CarouselComp