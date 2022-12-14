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
                  <div className='col-md-6 order-lg-2'>
                    <div className='bannerForm pt-5'>
                      <p className='pb-2'>We offer cost effective and profitable web solutions to our customers.</p>
                      <div className='formBody p-5 mt-4'>
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
                  <div className='col-md-6 order-lg-1'>
                    <div className='bannerImg pe-md-4 ms-md-auto'>
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
              <div className='row mx-2'>
                <div className='col-md-4 p-0'>
                  <div className='mt-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={WebDev} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Website Development</h5>
                        <p>You get a fully-functional website that force the visitors to stay, interact and convert. we help you power your business with effective platform.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-0'>
                  <div className='mt-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={Ecom} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>E-Commerce Website</h5>
                        <p>We are developing online stores using latest technology with latest framework and also we are providing dedicated support for E-commerce clients.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-0'>
                  <div className='mt-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={WebApp} alt='service-icon' className='serviceIcon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Web Application Development</h5>
                        <p>Weblooks IT services promises to best web application development services at the most competitive pricing. We specialize in rendering flexible and superior quality web applications.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                        </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={DigitalMarketing} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Digital Marketing (SEO,SMO,SEM)</h5>
                        <p>As per client requirement we provide the best Digital Marketing Services. We set up an efficient campaign and also provide best cost effective solution so as to run it.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={AndriodApp} alt='service-icon' className='serviceIcon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Andriod App Development</h5>
                        <p>A High-Performance and Scalable App That Runs Smoothly Across Diverse Android Devices.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-0'>
                  <div className='mt-xs-3 serviceBox position-relative'>
                    <div className='ServiceShape'>
                      <div className='serviceContent'>
                        <img src={Hosting} alt='service-icon' />
                        <h5 className='mt-4 mb-3 textBlue fw-bold'>Domain & Hosting Service</h5>
                        <p>We provide all types of domains for purchase as per client requirement and integrate the same along with hosting.</p>
                      </div>
                      <button className="text-uppercase transperentBtn rounded-0 fw-medium px-4 py-2 mt-4">
                          Request a quote
                      </button>
                    </div>
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
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Quality} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Quality Service</h5>
                  <p>We deliver brilliant work using the latest technologies that are focused on gaining the highest returns for your business and keep our clients always as our foremost priorty.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Customization} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Customization</h5>
                  <p>We provide customized solutions that range from web designing, e-commerce, and mobile application development to digital marketing.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Support} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Dedicated Support</h5>
                  <p>We enjoy creating long lasting relationships with our esteemed clients, we solve your query within 48 working hours.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Budget} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Budget Friendly</h5>
                  <p>Affordable price solutions for every need of our client.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={CustomerSatisfaction} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Customer satisfaction</h5>
                  <p>Constant coordination between our team and clients helps us achieve quality work output and maximum client satisfaction.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='whyUsContent text-center px-4 pb-4'>
                  <img src={Team} alt='Why Us Icon' />
                  <h5 className='mt-4 mb-3 textYellow fw-bold'>Our Team</h5>
                  <p>We have talented team of certified professionals with great knowledge and skills in this industry.</p>
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

            <div className='row mt-5'>
              <div className='col-md-4'>
                <div className='counter my-4'>
                  <h1 className='textBlue display-5'>53+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Happy Clients</p>
                </div>
                <div className='counter mb-4'>
                  <h1 className='textBlue display-5'>20+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Running projects</p>
                </div>
                <div className='counter mb-4'>
                  <h1 className='textBlue display-5'>567+</h1>
                  <p className='fs-4 textYellow text-capitalize'>Cup of coffee</p>
                </div>
              </div>

              <div className='col-md-8'>
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

        <section className='contact'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='shapeFour position-relative'>
                <img src={ContactBackground} alt='' className='w-100'/>
              </div>
            </div>
            <div className='col-md-6 mt-3 ms-md-4'>
              <div className='sectionHead text-left my-5'>
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
                  <select class="form-select ps-4">
                    <option selected>Website Development</option>
                    <option value="">E-commerce Website</option>
                    <option value="">Web Application Development</option>
                    <option value="">Digital Marketing (SEO, SMO...)</option>
                    <option value="">Android App Development</option>
                    <option value="">Domain & Hosting Services</option>
                    <option value="">Customized Software Development</option>
                  </select>
                </div>
                <div class="mb-4">
                  <textarea type="text" class="form-control ps-4" id="requirement" placeholder="Requirements" rows={3}></textarea>
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