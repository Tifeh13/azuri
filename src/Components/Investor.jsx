import React from 'react'; // Import React
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import './Investors.css';
import Logo from '../assets/round.png';

function Investor() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    // autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center py-5'
      style={{
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          width: '90%',
        }}
        className='d-flex justify-content-center align-items-center flex-column py-5'
      >
        <div className=''>
          <h1
            className='text-center'
            style={{
              color: '#DB9E00',
              fontSize: '3rem',
            }}
          >
            GALLERY
          </h1>
        </div>
        <div className='row w-100 align-items-center justify-content-center mt-5 mx-0'>
          <Slider {...settings}>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Logo} alt='' />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Investor;
