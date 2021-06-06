import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext
} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, social } from "../data/Navdata";
import { Link } from "react-router-dom";
import {AppContext} from '../App'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainer = useRef(null);
  const linkTarget = useRef(null);
  const {handleClick,isActive} =useContext(AppContext)
 
  const navHandle = (id) => {
    handleClick(id);
    setShowLinks(false);
}
 
  const checkNav = useCallback(() => {
    const linksHeight =
      linkTarget.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = 0;
    }
  }, [showLinks]);

  useEffect(() => {
    checkNav();
  }, [checkNav]);

  return (
    <div className='nav-fixed'>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <span className='logo'>logo</span>
            <button
              className='nav-toggle'
              onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className='links-container'
            ref={linksContainer}>
            <ul className='links' ref={linkTarget}>
              {links.map((link) => {
                const { id, url, text } = link;
                let checkActive = 'not-active'
                if (isActive === id) {
                  checkActive = 'active'
                }
                return (
                  <Link
                    id='a'
                    className={checkActive}
                    to={url}
                    key={id}
                    onClick={() => navHandle(id)}>
                    {text}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className='social-icons'>
            <ul className='links'>
              {social.map((icons) => {
                const { id, url, icon } = icons;
                return (
                  <a key={id} href={url} className='a'>
                    {icon}
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
