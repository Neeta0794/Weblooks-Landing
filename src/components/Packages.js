import React, { Component } from 'react';
import BasicIcon from '../assets/img/mouse.png';
import NormalIcon from '../assets/img/cup.png';
import AdvanceIcon from '../assets/img/gear.png';
import PremiumIcon from '../assets/img/monitor.png';

class Packages extends Component {
  render() {
    return (
      <section className='packages'>
        <div className='container-md'>
          <div className='sectionHead text-center my-5'>
            <h2 className='textBlue fw-normal py-3'>Hosting Packages</h2>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='packageBox text-center mx-md-1 mb-5 mb-lg-0'>
                <div className='packageHead position-relative'>
                  <img src={BasicIcon} className='packageIcon rounded-circle mx-auto' alt='Package Icon' />
                  <h3 className='fw-bold fs-4 text-white'>Basic Plan</h3>
                </div>
                <div className='plan'>
                  <p className='mb-0 py-2 odd'><b>1</b> Website</p>
                  <p className='mb-0 py-2 even'><b>500 MB</b> Storage Space</p>
                  <p className='mb-0 py-2 odd'><b>1 GB</b> Bandwidth</p>
                  <p className='mb-0 py-2 even'><s>Free Sub-Domains</s></p>
                  <p className='mb-0 py-2 odd'><s>E-mail Accounts</s></p>
                  <p className='mb-0 py-2 even'><s>Mysql Database</s></p>
                  <p className='mb-0 py-2 odd'><s>SSL Certificate</s></p>
                  <p className='mb-0 py-2 even'>Only FTP</p>
                </div>
                <div className='packagePrice py-4'>
                  <h5 className='fw-bold textYellow'>Rs. 999<small className='fw-light'>/ per annum</small></h5>
                  <button className='text-uppercase webBtnYellow text-white rounded-0 border-0 px-3 py-2 fw-bold'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='packageBox text-center mx-md-1 mb-5 mb-lg-0'>
                <div className='packageHead position-relative'>
                  <img src={NormalIcon} className='packageIcon rounded-circle mx-auto' alt='Package Icon' />
                  <h3 className='fw-bold fs-4 text-white'>Normal Plan</h3>
                </div>
                <div className='plan'>
                  <p className='mb-0 py-2 odd'><b>1</b> Website</p>
                  <p className='mb-0 py-2 even'><b>1 GB</b> Storage Space</p>
                  <p className='mb-0 py-2 odd'><b>5 GB</b> Bandwidth</p>
                  <p className='mb-0 py-2 even'><s>Free Sub-Domains</s></p>
                  <p className='mb-0 py-2 odd'><b>1</b> E-mail Accounts</p>
                  <p className='mb-0 py-2 even'><s>Mysql Database</s></p>
                  <p className='mb-0 py-2 odd'><s>SSL Certificate</s></p>
                  <p className='mb-0 py-2 even'>Control Panel & FTP</p>
                </div>
                <div className='packagePrice py-4'>
                  <h5 className='fw-bold textYellow'>Rs. 1,499<small className='fw-light'>/ per annum</small></h5>
                  <button className='text-uppercase webBtnYellow text-white rounded-0 border-0 px-3 py-2 fw-bold'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='packageBox text-center mx-md-1 mb-5 mb-lg-0'>
                <div className='packageHead position-relative'>
                  <img src={AdvanceIcon} className='packageIcon rounded-circle mx-auto' alt='Package Icon' />
                  <h3 className='fw-bold fs-4 text-white'>Advance Plan</h3>
                </div>
                <div className='plan'>
                  <p className='mb-0 py-2 odd'><b>1</b> Website</p>
                  <p className='mb-0 py-2 even'><b>1 GB</b> Storage Space</p>
                  <p className='mb-0 py-2 odd'><b>10 GB</b> Bandwidth</p>
                  <p className='mb-0 py-2 even'><b>2</b> Free Sub-Domains</p>
                  <p className='mb-0 py-2 odd'><b>2</b> E-mail Accounts</p>
                  <p className='mb-0 py-2 even'><b>2</b> Mysql Database</p>
                  <p className='mb-0 py-2 odd'>SSL Certificate</p>
                  <p className='mb-0 py-2 even'>Control Panel & FTP</p>
                </div>
                <div className='packagePrice py-4'>
                  <h5 className='fw-bold textYellow'>Rs. 1,999<small className='fw-light'>/ per annum</small></h5>
                  <button className='text-uppercase webBtnYellow text-white rounded-0 border-0 px-3 py-2 fw-bold'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='packageBox text-center mx-md-1'>
                <div className='packageHead position-relative'>
                  <img src={PremiumIcon} className='packageIcon rounded-circle mx-auto' alt='Package Icon' />
                  <h3 className='fw-bold fs-4 text-white'>Premium Plan</h3>
                </div>
                <div className='plan'>
                  <p className='mb-0 py-2 odd'><b>1</b> Website</p>
                  <p className='mb-0 py-2 even'><b>2 GB</b> Storage Space</p>
                  <p className='mb-0 py-2 odd'><b>20 GB</b> Bandwidth</p>
                  <p className='mb-0 py-2 even'><b>5</b> Free Sub-Domains</p>
                  <p className='mb-0 py-2 odd'><b>5</b> E-mail Accounts</p>
                  <p className='mb-0 py-2 even'><b>5</b> Mysql Database</p>
                  <p className='mb-0 py-2 odd'>SSL Certificate</p>
                  <p className='mb-0 py-2 even'>Control Panel & FTP</p>
                </div>
                <div className='packagePrice py-4'>
                  <h5 className='fw-bold textYellow'>Rs. 2,999<small className='fw-light'>/ per annum</small></h5>
                  <button className='text-uppercase webBtnYellow text-white rounded-0 border-0 px-3 py-2 fw-bold'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Packages;