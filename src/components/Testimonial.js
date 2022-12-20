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
                            <blockquote class="blockquote">
                                <p className='fst-italic'>"We are very much fortunate to find such people with so much creativity, passion and determination. We are not only happy to work with you but we are completely satisfied with your work. Keep up the good work.”</p>
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
                            <blockquote class="blockquote">
                                <p className='fst-italic'>“They are very Creative and understands the customer's need We are happy we got right people The blessings of Allah (be upon you).”</p>
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
                            <blockquote class="blockquote">
                                <p className='fst-italic'>“Excellent work done by Weblooks IT Services.”</p>
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
