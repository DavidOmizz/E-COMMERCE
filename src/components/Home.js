import React from 'react'
import hero1 from '../images/hero_1.jpg'
import hero2 from '../images/hero-4.jpg'
import male1 from '../images/m-1.jpg'
import male2 from '../images/m-2.jpg'
import male3 from '../images/m-3.jpg'
import female1 from '../images/f-1.jpg'
import female2 from '../images/f-2.jpg'
import female3 from '../images/f-3.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMobile, FaAndroid} from 'react-icons/fa';




function Home() {
  // let today = new Date()
  // let date = today.getFullYear()
  let date = new Date().getFullYear()


  return (
    <div>
      <div className='hero' style={{backgroundImage: `url(${hero1})`, height:'90vh', backgroundSize:'cover'}}>
        {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={hero1} class="d-block w-100" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>Welcome to my world</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={hero2} class="d-block w-100" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>We give you the best</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={hero1} class="d-block w-100" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>Ask for help</h1>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

        <div className='heroText'>
          <h1>Finding Your Perfect Wears</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla
          </p>
        </div>
      </div>
      {/* <div className='container'>
        <div className='row home-row'>
            <div className='home-gender col-md-4 shadow bg-body rounded'>
              <img className='' width={200} height={250} src={maleSect} />
              <h4>Male</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla
              </p>            
              </div>
            <div className='home-gender col-md-4 shadow bg-body rounded'>
              <img className='' src={childSect} height={250} width={200} />
              <h4>Male</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla
              </p> 
            </div>
            <div className='home-gender col-md-4 shadow bg-body rounded'>
              <img className='' width={200} height={250}  src={femaleSect} />
              <h4>Male</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla
              </p>
            </div>
        </div>
      </div> */}

      {/* Why shop with us------------------------------------------------------------------------>>>>>>>>>>>> */}

      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='text-center'>
            <h1>Why Shop With Us</h1>
          </div>
        </div>
      </div>

      {/* End of why shop with us--------------------------------------------------------------------->>>>>>>>>>> */}

      {/* Container section --------------------------------------------------------------------->>>>>> */}

      <div className='container-fluid'>
        <div className='row justify-content-center' id='gender-Section'>
          <h2 className='text-center mt-5 category-font'>CATEGORIES</h2>
            <div className='col-md-6 col-sm-12'>
              <h3 className='text-center mt-3 mb-2'>MEN</h3>
              <div className=' d-flex male-section' >
                <img src={male1} width={200}/>
                <img src={male2} width={200}/>
                <img src={male3} width={200}/>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <h3 className='text-center mt-3 mb-2'>WOMEN</h3>
              <div className=' d-flex female-section' >
                <img src={female1} width={200}/>
                <img src={female2} width={200}/>
                <img src={female3} width={200}/>
              </div>
            </div>
        </div>
      </div>


      {/* End of container section ---------------------------------------------------------->>>>>> */}


      {/* fOOTER ------------------------------------------------------------------------------>>>>> */}

      <footer className='container-fluid mt-5'>
          <div className='row justify-content-center footer-flex'>
            <div className='col-md-2'>
              <h4>About</h4>
              <p>AVIRA Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum commodi similique totam</p>
                <FaFacebook size='1.2rem' className='icons'/>
                <FaTwitter size='1.2rem' className='icons'/>
                <FaInstagram size='1.2rem' className='icons'/>
            </div>
            <div className='col-md-2'>
              <h4>Category</h4>
              <p><a href=''>Men</a></p>
              <p><a href=''>Women</a></p>
            </div>
            
            <div className='col-md-4'>
              <h4>Contact</h4>
                <div className='footer-contact d-flex'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum commodi similique totam</p>
                </div>
                <p className=''><a href='mailto:davidomisakin4good@gmail.com?subject=Hello, David'><FaEnvelope size='1rem' className='contact-icons'/>davidomisakin4good@gmail.com</a></p>
                <p><FaMobile size='1rem' className='contact-icons'/>+234 803 2482 069</p>

            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center mt-2 copyright'>
              <p>copyright ©{date} All rights reserved by DavidOmizz</p>
            </div>
          </div>
      </footer>
    </div>
    
  )
}

export default Home