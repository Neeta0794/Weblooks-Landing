import React, { Component } from 'react';
import Logo from '../assets/img/logo.png';

class Footer extends Component {
  render() {
    const fontSize = {
        fontSize: "14px",
        lineHeight : "26px"
    }
    return (
      <div className='py-5 footer'>
        <div className='container-md'>
            <div className='row'>
                <div className='col-lg-3 col-md-12'>
                    <a href='/' target='_blank'>
                        <img src={Logo} alt='logo' className='fLogo' />
                    </a>
                    <p className='mt-3 mt-md-4' style={{lineHeight : "26px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className='ps-md-4 fServices'>
                        <h3 className='my-4 pt-md-2 fs-5 textYellow'>Services</h3>
                        <ul className='p-0 mb-md-0'>
                            <li className='mt-2'>
                                <a href='/'>Website Development</a>
                            </li>
                            <li className='mt-2'>
                                <a href='/'>E-commerce Website</a>
                            </li>
                            <li className='mt-2'>
                                <a href='/'>Web Application Development</a>
                            </li>
                            <li className='mt-2'>
                                <a href='/'>Digital Marketing (SEO, SMO...)</a>
                            </li>
                            <li className='mt-2'>
                                <a href='/'>Android App Development</a>
                            </li>
                            <li className='mt-2'>
                                <a href='/'>Domain & Hosting Services</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <h3 className='my-4 pt-md-2 fs-5 textYellow'>Contact Us</h3>
                    <p className='d-flex' style={fontSize}>
                        <i className="fa-solid fa-location-dot pe-2 pt-1"></i>
                        11, Pathak Residency,<br />
                        N L Complex, Anand Nagar,<br />
                        Dahisar(E), Mumbai 400068.
                    </p>
                    <p style={fontSize}><i className="fa-solid fa-phone pe-2 pt-1"></i>(+91) 987 654 3201</p>
                    <p style={fontSize}><i className="fa-solid fa-envelope pe-2 pt-1"></i>info@yourwebsite.in</p>
                </div>

                <div className='col-lg-3 col-md-4'>
                    <h3 className='my-4 pt-md-2 fs-5 textYellow'>Reach Us</h3>
                    <ul className='ps-0'>
                        <li className='float-start pe-3'>
                            <a href='/'><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className='float-start pe-3'>
                            <a href='/'><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className='float-start pe-3'>
                            <a href='/'><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href='/'><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                    <div className="fb-like" data-href="https://weblooks.co.in/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
                    <p style={fontSize} className="mt-2">© 2018 Weblooks IT Services.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer;