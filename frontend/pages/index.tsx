import Head from 'next/head'
import Image from 'next/image'
import Header from "../comp/Header"
import CarouselComp from "../comp/CarouselComp"
import Book from "../public/l.jpg";

export default function Home() {
  return (
  <div>
    <Head>
      <title>HomePage</title>
    </Head>
    <Header/>
    <CarouselComp/>
    
    
    <div className='container-fluid '>
      <div className='row gap-5 m-5 mx-xxl-5 justify-content-center'>

        <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <div className='div'>
            <div className='bg-success px-5 py-2 price'>wertyuio</div>
            <Image className="justify-content-center img"  src={Book} alt="First slide" />
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text fw-bold">Card title</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <Image className="justify-content-center img"  src={Book} alt="First slide" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <Image className="justify-content-center img"  src={Book} alt="First slide" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <Image className="justify-content-center img"  src={Book} alt="First slide" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <Image className="justify-content-center img"  src={Book} alt="First slide" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-2">
          <Image className="justify-content-center img"  src={Book} alt="First slide" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
      </div>
    </div>
  </div>
  )
}
