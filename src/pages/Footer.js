import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import DarkMode from '../components/DarkMode';
import { Link } from 'react-router-dom';



export default function App() {
  return (
    <>
      <MDBFooter className='text-center text-lg-start text-muted'>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <div className="me-3" />
                  Land-Locked            </h6>
                <p>
                  Here at Land-Locked thrift we offer a unique shopping experience, with constantly changing inventory and a community-driven focus on sustainability and affordability.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                <p>
                  <Link to="./" className='text-reset'>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="./shop" className='text-reset'>
                    Inventory
                  </Link>
                </p>
                <p>
                  <Link to="./ship" className='text-reset'>
                    Donate
                  </Link>
                </p>
                <p>
                  <Link to="./about" className='text-reset'>
                    About
                  </Link>
                </p>
                <p>
                  <Link to="./contact" className='text-reset'>
                    Contact
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <Link to="./Tac" className='text-reset'>
                    Terms & Conditions
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  6997 N Glen Harbor Blvd, Glendale, AZ 85307              </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  Landlockedthriftshop@Gmail.com              </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> (623)-910-5216
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022  Copyright:2022-2023 Landlockedthriftshop.com<br />
          <a className='text-reset fw-bold'>
            All Rights Reserved
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
