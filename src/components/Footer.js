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
                <div className='col-md-3'>
                    <a href='/' target='_blank'>
                        <img src={Logo} alt='logo' className='w-75' />
                    </a>
                    <p className='mt-3' style={{lineHeight : "26px"}}>Weblooks IT Services is the <span>Best Web Development Company In Mumbai</span> that provides professional customized solutions in web designing and software development. We deliver premium solutions for a wide range of business throughout India and around the world.</p>
                </div>

                <div className='col-md-3'>
                    <div className='ps-md-4 fServices'>
                        <h3 className='my-4 pt-md-2 fs-5 textYellow'>Services</h3>
                        <ul className='p-0'>
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

                <div className='col-md-3'>
                    <h3 className='my-4 pt-md-2 fs-5 textYellow'>Contact Us</h3>
                    <p className='d-flex' style={fontSize}>
                        <i className="fa-solid fa-location-dot pe-2 pt-1"></i>
                        11, Pathak Residency,<br />
                        N L Complex, Anand Nagar,<br />
                        Dahisar(E), Mumbai 400068.
                    </p>
                    <p style={fontSize}><i className="fa-solid fa-phone pe-2 pt-1"></i>(+91) 986 761 8098</p>
                    <p style={fontSize}><i className="fa-solid fa-envelope pe-2 pt-1"></i>info@weblooks.co.in</p>
                </div>

                <div className='col-md-3'>
                    <h3 className='my-4 pt-md-2 fs-5 textYellow'>Reach Us</h3>
                    <ul className='ps-0'>
                        <li className='float-start pe-3'>
                            <a href='/'><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className='float-start pe-3'>
                            <a href='/'><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className='float-start pe-3'>
                            <a href='/'><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                    <div class="fb-like" data-href="https://weblooks.co.in/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>
                    <p style={fontSize} className="mt-2">© 2018 Weblooks IT Services.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer;