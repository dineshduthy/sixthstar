import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { StyleSheet, css } from 'aphrodite';
import fadeIn from 'react-animations/lib/fade-in';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import tada from 'react-animations/lib/tada';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import slideInLeft from 'react-animations/lib/slide-in-left';  // Importing zoomInDown
import Link from 'next/link';
import ClientSlider from './section/slider';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s',
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: '2s',
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: '2s',
  },
  tada: {
    animationName: tada,
    animationDuration: '15s',
  },
  zoomInDown: {
    animationName: zoomInDown,  // Correct usage after import
    animationDuration: '4s',
  },
  slideInLeft: {
    animationName: slideInLeft,  // Correct usage after import
    animationDuration: '4s',
  },
});

export default function New() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures code runs only on the client-side
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>My Website</title>
      </Head>

      {/* Banner section starts */}
      <section className="index-banner-sec">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="container" style={{ position: 'relative' }}>
                {/* Only apply animations if client-side rendering */}
                <h1 className={isClient ? css(styles.slideInUp) : ''}>
                  Outgoing SPAM Filter
                </h1>
                <p className={isClient ? css(styles.slideInDown) : ''}>
                  PROTECT AND STOP UNWANTED EMAILS
                </p>
                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>

            {/* Additional slides */}
            <div className="carousel-item" data-bs-interval="20000">
              <div className="container">
              <h1 className={isClient ? css(styles.slideInDown) : ''}>
              Incoming SPAM Filter
                </h1>
                <p className={isClient ? css(styles.slideInUp) : ''}>
                  PROTECT UNWANTED EMAILS
                </p>
                
                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="10000">
              <div className="container">
              <h1 className={isClient ? css(styles.slideInDown) : ''}>
              STOP UNWANTED EMAILS
                  
                </h1>
                <p className={isClient ? css(styles.slideInUp) : ''}>
                Both I/O SPAM Filter
                </p>
                
                <button className={isClient ? css(styles.slideInDown) : ''}>
                  <Link href="#">Discover More</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Banner section ends */}

      {/* Services section starts */}
      <section className="index-service-sec">
        <div className="container">
          <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728562780/services-one-shape_hkx7r5.png" className={`${isClient ? css(styles.tada) : ''} shake-img`} alt="" />
          <div className="row index-service">
            <div className="col-md-6">
              <h5>Our Services List</h5>
              <h2>What We’re Offering</h2>
            </div>

            <div className="col-md-6 align-content-center">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>

          <div className="row index-service">
            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ts-envelope-download"></i></div>
              <span>01</span>
              <h4>UI / UX <br />Creative Design</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ts-envelope-dot"></i></div>
              <span>02</span>
              <h4>Visual<br />Graphic Design</h4>
              <Link href="#">
                <i className={` fa-solid fa-arrow-right-long`}></i>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-bs-mailbox-envelope"></i></div>
              <span>03</span>
              <h4>Strategy &<br />Digital Marketing</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <div><i className="fi fi-ss-email-pending"></i></div>
              <span>04</span>
              <h4>Effective<br />Business Growth</h4>
              <Link href="#"><i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
          </div>

          <div className="row index-service">
            <div className="col-12 text-center align-content-center">
              <p>qutiiz services built specifically for your business. <Link href="#">Find Your Solution</Link></p>
            </div>
          </div>
        </div>
      </section>
      {/* Services section ends */}

      {/* get to know section starts */}
      <section className="get-to-know-sec">
        <div className="container">
          <div className="row get-to-know">
            <div className="col-md-6">
              <div className={`${isClient ? css(styles.slideInLeft) : ''} get-to-know-img `}>
                <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728901908/get-to-know-img_kbqpgn.jpg" alt="" />
                <div className='icon'>
                <i class="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>get to know us</h5>
              <h2>We’re ready to grow your business with us</h2>
              <h4>We’re committed to delivering the best digital marketing for your businesses</h4>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.</p>

              <div className="row progress-bar">
                <div className="col-12">
                  <h4 className='text-left'>Digital Marketing</h4>
                  <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="get-t0-know-person">
                  <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728967374/get-to-know-person-img_ir5krk.jpg" alt="" />
                  <div className='con'>
                    <h4>John Smith</h4>
                    <span>CEO & co Founder</span>
                     </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get to know section ends */}

      <section className="index-slider">
      <div class="container">
  <div class="row ">

    <div class="col-12">
      <ClientSlider />
    </div>

  </div>
</div>
      </section>

      {/* project sec starts */}

    <section className='index-pro-sec'>
    <div class="container">
  <div class="row ">

    <div class="col-12">
   
    <div class="row index-pro">

<div class="col-lg-3 col-md-6">
<i class="fi fi-ss-edit-alt"></i>
<h3>6420</h3>
<p>Projects Completed
</p>
</div>

<div class="col-lg-3 col-md-6">
<i class="fi fi-ts-feedback-review"></i>
<h3>8760</h3>
<p>repeat customers
</p>
</div>

<div class="col-lg-3 col-md-6">
<i class="fi fi-ss-review"></i>
<h3>9280</h3>
<p>Satisfied Clients
</p>
</div>

<div class="col-lg-3 col-md-6">
<i class="fi fi-ss-employees"></i>
<h3>380</h3>
<p>Expert Teams
</p>
</div>  

</div>

    </div>

  </div>
</div>
    </section>

      {/* project sec ends */}


      {/* index why choose */}

      <section className="index-whychoose-sec">
      <div class="container">
  <div class="row index-whychoose">

    <div class="col-md-6">
    <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728989516/why-choose-one-img_p7kg3b.jpg" alt="" />
    </div>

    <div class="col-md-6">
    <span>company benefits</span>
    <h2>Why You should choose qutiiz services?</h2>
    <p>Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum. Which don’t look even slightly believable. If you are going to use a passage.</p>
    <div className='why'>
      <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728989516/why-choose-one-img_p7kg3b.jpg" alt="" width={220} height={124} />
      <ul>
        <li><i class="fa-solid fa-check"></i>Nsectetur cing elit</li>
        <li><i class="fa-solid fa-check"></i>Suspe ndisse agittis leo</li>
        <li><i class="fa-solid fa-check"></i>Aliquam tristique exe</li>
        <li><i class="fa-solid fa-check"></i>Nisl sit amet tellus</li>
      </ul>
    </div>
    </div>

  </div>
</div>
      </section>


      {/* index why choose ends */}

      {/* index protext sec starts */}

      <section className="index-protect-sec">\
      <div class="container">
  <div class="row index-protect">

    <div class="col-12">
      <div className='icon'>
      <i class="fa-solid fa-shield"></i>
      </div>
   
    <h2>qutiiz is a ready to protect
    your businesses</h2>
    </div>

  </div>
</div>
      </section>
      
      {/* index protext sec ends */}

      {/* index tab sec starts */}

      <section className="index-tab-sec">
      <div class="container">
  <div class="row ">

    <div class="col-12 index-tab">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Business Growth</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Financial Advices</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">marketing soltution
    </button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className='index-tab-con'> 
      <ul>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'> 
        <div className='left-con'>
        <i class="fi fi-tr-meeting-alt"></i>
        <h3>We have over 18 years of experience</h3>
        <button><Link href='#'>Read More</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728993269/tabs-content-experience-img_dykhvl.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className='index-tab-con'> 
      <ul>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'> 
        <div className='left-con'>
        <i class="fi fi-tr-meeting-alt"></i>
        <h3>We have over 18 years of experience</h3>
        <button><Link href='#'>Read More</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728993269/tabs-content-experience-img_dykhvl.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    
  <div className='index-tab-con'> 
      <ul>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
        <li><i class="fa-solid fa-check"></i> <div className='tab-index-list'> <h4>Highest Success Rates</h4>
        <p>Lorem nibh vel velit a aliqu. Aenean so tudin, lorem is text quis bibendum.</p>
        </div></li>
      </ul>
      <div className='index-tab-con'> 
        <div className='left-con'>
        <i class="fi fi-tr-meeting-alt"></i>
        <h3>We have over 18 years of experience</h3>
        <button><Link href='#'>Read More</Link></button>
        </div>
        <div className='right-tab-con'>
        <img src="https://res.cloudinary.com/daggx9p24/image/upload/v1728993269/tabs-content-experience-img_dykhvl.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
</div>
      </section>

      {/* index tabsec ends */}
    </div>
  );
}
