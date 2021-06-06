import React from "react";
import { FaChevronRight } from "react-icons/fa";
import {social} from '../data/Navdata'

export default function Footer() {
  return (
    <footer id='footer'>
      <article className='footer-top'>
        <div className='section footer-grid'>
          <div className='footer-contact'>
            <h3>Logo</h3>
            <p>
              A108 Adam Street ,<br></br>
              New York, NY 535022<br></br>
              United States <br></br>
              <span style={{ marginTop: "1.3rem",display:'block' }}>
                <strong>Phone:</strong> +1 999 765 66 543
                <br></br>
                <strong>Email:</strong> designer@example.com
              </span>
              <br></br>
            </p>
          </div>

          <div className='footer-links'>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Home</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>About us</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Services</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Terms of service</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className='footer-links'>
            <h3>Our Services</h3>
            <ul>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Web Design</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Web Development</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Product Management</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Marketing</a>
              </li>
              <li>
                <FaChevronRight className='footer-right' />
                <a href='https://dasiloy.com'>Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className='footer-newsletter'>
            <h3>Join Our Newsletter</h3>
            <p>
              Tamen quem nulla quae legam multos aute sint
              culpa legam noster magna
            </p>
            <form>
              <input type='email' name='email' />
              <input type='submit' value='Subscribe' />
            </form>
          </div>
        </div>
      </article>

      <article>
        <div className='section footer-ends'>
          <div>
            <div className='copyright'>
              &copy; Copyright
              <strong>
                <span> Logo </span>
              </strong>
              . All Rights Reserved
            </div>
            <div className='credits'>
              Designed by
              <a href='https://dasiloy.com/'>
                DasiloyDesigners
              </a>
            </div>
          </div>
          <div className='social-links  text-md-right pt-3 pt-md-0'>
                      {social.map((item) => {
                          const { id, url, icon } = item;
                          return (
                            <div key={id} className='a'>
                              <a href={url}>
                                {icon}
                              </a>
                            </div>
                          );
           })}
          </div>
        </div>
      </article>
    </footer>
  );
}
