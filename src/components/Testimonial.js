import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonial extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section className='sectionPadding mt-5 testimonial position-relative'>
            <div className='container-md'>
                <Slider {...settings}>
                    <div className='row testimonialSlider d-flex'>
                        <div className='col-md-7'>
                            <blockquote className="blockquote">
                                <p className='fst-italic'>"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
                            </blockquote>
                        </div>
                        <div className='col-md-5'>
                            <div className='float-md-end avtar'>
                                <img src='https://weblooks.co.in/img/profile/web-naresh.jpg' alt='' className='d-inline-block border border-3 rounded-circle' />
                                <p className='d-inline-block ms-3 textBlue'>Naresh Lakdawala</p>
                            </div>
                        </div>
                    </div>

                    <div className='row testimonialSlider d-flex'>
                        <div className='col-md-8'>
                            <blockquote className="blockquote">
                                <p className='fst-italic'>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</p>
                            </blockquote>
                        </div>
                        <div className='col-md-4'>
                            <div className='float-md-end avtar'>
                                <img src='https://weblooks.co.in/img/profile/web-umer.jpg' alt='' className='d-inline-block border border-3 rounded-circle' />
                                <p className='d-inline-block ms-3 textBlue'>Umar Shaikh</p>
                            </div>
                        </div>
                    </div>

                    <div className='row testimonialSlider d-flex'>
                        <div className='col-md-8'>
                            <blockquote className="blockquote">
                                <p className='fst-italic'>“Contrary to popular belief, Lorem Ipsum is not simply random text.”</p>
                            </blockquote>
                        </div>
                        <div className='col-md-4'>
                            <div className='float-md-end avtar'>
                                <img src='https://weblooks.co.in/img/profile/web-amit.jpg' alt='' className='d-inline-block border border-3 rounded-circle' />
                                <p className='d-inline-block ms-3 textBlue'>Amit Malhotra</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
  }
}
export default Testimonial;
