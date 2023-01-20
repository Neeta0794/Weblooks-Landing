import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';
import Packages from './Packages';
import Testimonial from './Testimonial';
import Footer from './Footer';
import BannerImg from '../assets/img/bannerImg.png';
import PaperPlane from '../assets/img/paperPlane.png';
import WebDev from '../assets/img/webDev.png';
import Ecom from '../assets/img/ecom.png';
import WebApp from '../assets/img/webApp.png';
import DigitalMarketing from '../assets/img/digitalMarketing.png';
import AndriodApp from '../assets/img/androidApp.png';
import Hosting from '../assets/img/hosting.png';
import WhyUs from '../assets/img/whyUs.png';
import Quality from '../assets/img/quality.png';
import Customization from '../assets/img/customization.png';
import Support from '../assets/img/support.png';
import Budget from '../assets/img/budget.png';
import CustomerSatisfaction from '../assets/img/custSatisfaction.png';
import Team from '../assets/img/team.png';
import Portfolio from '../assets/img/portfolio.png';
import Img1 from '../assets/img/1.jpg';
import Img2 from '../assets/img/2.jpg';
import Img3 from '../assets/img/3.jpg';
import ContactBackground from '../assets/img/shapeFour.png';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='position-relative'>
          <div className='shapOne'>
            <div className='container-md'>
              <Navbar />
              <section className='banner'>
                <div className='row'>
                  <div className='col-lg-6 order-lg-2'>
                    <div className='bannerForm pt-4 pt-md-5 pt-sm-3'>
                      <p className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <div className='formBody p-md-5 p-4 mt-4'>
                        <form>
                          <input className="ps-4 form-control mb-4 py-2" type="text" placeholder="Name" aria-label="Name" />
                          <input className="ps-4 form-control mb-4 py-2" type="text" placeholder="Phone Number" aria-label="Phone Number" />
                          <input className="ps-4 form-control mb-4 py-2" type="text" placeholder="Email Address" aria-label="Email Address" />
                          <select className="ps-4 form-select py-2 mb-4">
                            <option value="">Website Development</option>
                            <option value="">E-commerce Website</option>
                            <option value="">Web Application Development</option>
                            <option value="">Digital Marketing (SEO, SMO...)</option>
                            <option value="">Android App Development</option>
                            <option value="">Domain & Hosting Services</option>
                            <option value="">Customized Software Development</option>
                          </select>
                        </form>
                          <button className='text-uppercase webBtnYellow text-white rounded-0 webBtn border-0 mt-3 px-4 py-2'>submit form</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 order-lg-1'>
                    <div className='bannerImg pe-lg-4 ms-md-auto mx-sm-auto'>
                      <img src={BannerImg} alt='' className='img-fluid mx-auto' />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className='services position-relative sectionPadding pb-5'>
            <div className='container-md pb-4'>
              <div className='sectionHead'>
                <img src={PaperPlane} alt='Services' className='headingIcon mb-4'/>
                <h2 className='textYellow fw-normal'>Services</h2>
                <p className='fw-light'>Getting a quality website is not an expenses but rather an investment.</p>
              </div>
              <div className='row mx-lg-2'>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-3 mt-md-0 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={WebDev} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Website Development</h5>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={Ecom} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>E-Commerce Website</h5>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={WebApp} alt='service-icon' className='serviceIcon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Web Application Development</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                        </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={DigitalMarketing} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Digital Marketing (SEO,SMO,SEM)</h5>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={AndriodApp} alt='service-icon' className='serviceIcon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Andriod App Development</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={Hosting} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Domain & Hosting Service</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                      </div>
                    </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2">
                          Request a quote
                      </button>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className='whyUs pb-5 pt-5'>
          <div className='container-md pt-4'>
            <div className='sectionHead text-center'>
              <img src={WhyUs} alt='Why Us' className='headingIcon mb-4'/>
              <h2 className='textBlue fw-normal'>Why Us</h2>
              <p className='fw-light'>A satisfied customer is the best business strategy of all.</p>
            </div>
            <div className='row pt-5'>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Quality} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Quality Service</h5>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Customization} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Customization</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Support} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Dedicated Support</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Budget} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Budget Friendly</h5>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={CustomerSatisfaction} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Customer satisfaction</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Team} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Our Team</h5>
                  <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Packages />

        <section className='sectionPadding'>
          <div className='container-md pb-4'>
            <div className='sectionHead text-center'>
              <img src={Portfolio} alt='Portfolio' className='headingIcon mb-4'/>
              <h2 className='textYellow fw-normal'>Portfolio</h2>
              <p className='fw-light'>Have a look on some of our awesome works samples.</p>
            </div>

            <div className='row mt-md-5'>
              <div className='col-md-4'>
                <div className='counter my-4'>
                  <h1 className='textBlue'>53+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Happy Clients</p>
                </div>
                <div className='counter mb-4'>
                  <h1 className='textBlue'>20+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Running projects</p>
                </div>
                <div className='counter mb-5 mb-md-4'>
                  <h1 className='textBlue'>567+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Cup of coffee</p>
                </div>
              </div>

              <div className='col-md-8 portfolioSlider'>
              <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false}>
                <div>
                    <img src={Img1} alt='' />
                </div>
                <div>
                    <img src={Img2} alt='' />
                </div>
                <div>
                    <img src={Img3} alt='' />
                </div>
            </Carousel>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />

        <section className='contact px-3'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='shapeFour position-relative'>
                <img src={ContactBackground} alt='' className='w-100'/>
              </div>
            </div>
            <div className='col-lg-6 mt-3 ms-md-4'>
              <div className='sectionHead text-left mt-md-5 mb-5'>
                <h2 className='textYellow fw-normal'>Contact Us</h2>
                <p className='fw-light mb-0'>Get in touch with us and feel free to ask your any questions.</p>
              </div>
              <div className='form'>
                <div className="mb-4">
                  <input type="text" className="form-control ps-4" id="name" placeholder="Name" />
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control ps-4" id="phone" placeholder="Phone Number" />
                </div>
                <div className="mb-4">
                  <input type="text" className="form-control ps-4" id="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <select className="form-select ps-4">
                    <option value="">Website Development</option>
                    <option value="">E-commerce Website</option>
                    <option value="">Web Application Development</option>
                    <option value="">Digital Marketing (SEO, SMO...)</option>
                    <option value="">Android App Development</option>
                    <option value="">Domain & Hosting Services</option>
                    <option value="">Customized Software Development</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea type="text" className="form-control ps-4" id="requirement" placeholder="Requirements" rows={3}></textarea>
                </div>
                <button className='text-uppercase webBtnYellow text-white rounded-0 border-0 webBtn px-4 py-2 mt-4'>submit form</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </React.Fragment>
    )
  }
}
export default Main