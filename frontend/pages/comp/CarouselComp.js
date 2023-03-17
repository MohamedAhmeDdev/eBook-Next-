import Image from 'next/image';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Book from "../../public/h.jpg";
import Book2 from "../../public/gg.jpg";

function CarouselComp() {
  return (
   
    <Carousel variant="dark">
    <Carousel.Item>
      <div className="row justify-content-center">
        <div className="col-6">
          <Image className="d-block w-100" src={Book} alt="First slide" />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div>
            <h5>Books</h5>
            <p>Individuals perceive the world differently, but books are a way to seek answers and new perspectives.</p>
          </div>
        </div>
      </div>
    </Carousel.Item>
  
    <Carousel.Item>
      <div className="row justify-content-center">
        <div className="col-6">
          <Image className="d-block w-100" src={Book2} alt="Second slide" />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div>
            <h5>Knowledge</h5>
            <p>Books provide us with knowledge, and knowledge is what drives us forward.</p>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
  
  
  )
}

export default CarouselComp