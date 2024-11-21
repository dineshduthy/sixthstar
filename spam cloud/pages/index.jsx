import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap'; // Corrected import

export async function getServerSideProps() {
  try {
    const res = await fetch('https://strapi.sixthstartech.com/api/homes?populate=banner.but,banner.feature,banner.item,banner.homeboxrow,banner.homeboxrow.col,banner.clientimage');
    
    // Check if response is OK
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        homeData: data.data[0], 
      },
    };
  } catch (error) {
    console.error('website is under maintanance:', error);

    
    return {
      props: {
        homeData: null, 
        error: error.message, 
      },


    };
  }
}

export default function Index({ homeData, error }) {
  
  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error}</p>
      </div>
    );
  }

  const banner = homeData?.banner || [];
  
  return (
    <div>

      <Head>
        <title>{banner[8]?.title}</title>
      <meta property="og:locale" content="en" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content={banner[8]?.description} />
<meta name="author" content="Spam Cloud" />
<meta name="robots" content="index, follow" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="canonical" href={banner[8]?.canonical} />
<meta property="og:title" content={banner[8]?.ogtitle} />
<meta property="og:description" content={banner[8]?.ogdescription} />
<meta property="og:image" content={banner[8]?.ogimage} />
<meta property="og:url" content={banner[8]?.ogurl} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={banner[8]?.ogtitle} />
<meta name="twitter:description" content={banner[8]?.ogdescription} />
<meta name="twitter:image" content={banner[8]?.ogimage} />
      </Head>

      {/* Spam Cloud Banner Section */}
      <section className='spam-cloud-banner-section' style={{ backgroundImage: `url(${banner[0]?.image})` }}>
        <div className='spam-cloud-banner-content'>
          <h1 className='text-left'>{banner[0]?.heading}</h1>
          <ul>
            {banner[0]?.feature?.map((feat) => (
              <li key={feat.id}>
                <i className="fa-solid fa-check-to-slot icon-home"></i> {feat.feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Email Reaching Section */}
      <div className="grid grid-cols-2 gap-2 email-reaching-row">
        <div className='email-reaching-column'>
          <img src={banner[1]?.image} alt={banner[1]?.heading} />
        </div>
        <div className='email-reaching-column'>
          <h1>{banner[1]?.heading}</h1>
          <p>{banner[1]?.para}</p>
          {banner[1]?.but?.url ? (
            <Button variant="primary">
              <Link href={banner[1]?.but?.url} passHref className='text-light'>
                {banner[1]?.but?.name}
              </Link>
            </Button>
          ) : (
            <Button variant="primary" disabled>No Link</Button> // Handle missing URL
          )}
        </div>
      </div>

<div className='essential-feature' style={{ backgroundImage: `url(${banner[2]?.bgimg})` }}>
  <h1 className='text-center'> {banner[2]?.heading}</h1>
  <p className='text-center'>
    {banner[2]?.para}
  </p>
  <div className='home-container2'>
    <ul className='home-container-list'>
      {banner[2]?.item?.map((item) => (
        <li key={item.id}>
          <i className="fa-solid fa-square-check feature-icon"></i> {item.items}
        </li>
      ))}
    </ul>
  </div>
</div>


      {/* Home Box Section */}
      <section className='incoming-spamfilter-box-section'>
        <div className="grid grid-cols-3 gap-3 incoming-spamfilter-box-row">
          {banner[3]?.homeboxrow[0]?.col?.map((col) => (
            <span key={col.id}>
              <div className='incoming-spamfilter-box-section-column'>
                <h1>{col.heading}</h1>
                <p>{col.para}</p>
                <i className={`fa-solid fa-heart incoming-box-icon`}></i>
              </div>
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 incoming-spamfilter-box-row">
          {banner[3]?.homeboxrow[1]?.col?.map((col) => (
            <span key={col.id}>
              <div className='incoming-spamfilter-box-section-column'>
                <h1>{col.heading}</h1>
                <p>{col.para}</p>
                <i className={`fa-solid fa-desktop incoming-box-icon`}></i>
              </div>
            </span>
          ))}
        </div>
      </section>

      {/* Incoming Spam Filter Section */}
      <div className="grid grid-cols-2 gap-2 email-reaching-row">
        <div className='email-reaching-column'>
          <img src={banner[4]?.image} alt={banner[4]?.heading} />
        </div>
        <div className='email-reaching-column'>
          <h1>{banner[4]?.heading}</h1>
          <p>{banner[4]?.para}</p>
          {banner[4]?.but?.url ? (
            <Button variant="primary">
              <Link href={banner[4]?.but?.url} passHref className='text-light'>
                {banner[4]?.but?.name}
              </Link>
            </Button>
          ) : (
            <Button variant="primary" disabled>No Link</Button> // Handle missing URL
          )}
        </div>
      </div>

      {/* Outgoing Spam Filter Section */}
      <div className="grid grid-cols-2 gap-2 email-reaching-row">
        <div className='email-reaching-column'>
          <img src={banner[5]?.image} alt={banner[5]?.heading} />
        </div>
        <div className='email-reaching-column'>
          <h1>{banner[5]?.heading}</h1>
          <p>{banner[5]?.para}</p>
          {banner[5]?.but?.url ? (
            <Button variant="primary">
              <Link href={banner[5]?.but?.url} passHref className='text-light'>
                {banner[5]?.but?.name}
              </Link>
            </Button>
          ) : (
            <Button variant="primary" disabled>No Link</Button> // Handle missing URL
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className='faq-content'>
        <h1>Frequently Asked Questions</h1>
        {banner[6]?.item?.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Our Clients */}
      <h1 className='text-center text-black '>Our Clients</h1>

      {/* Client slider starts */}
      <section className="client-slider">
        <div className="container client-slider h-100">
          <div className="row align-items-center h-100">
            <div className="container rounded">
              <div className="slider">
                <div className="logos">
                  {banner[7]?.clientimage?.map((image) => (
          <div key={image.id}>
          <img src={image.img} alt={`Client ${image.id}`}   />
        </div>
        ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client slider ends */}

    </div>
  );
}
