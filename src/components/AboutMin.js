import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import info from "../data/AboutData";
import { FaCheckCircle } from "react-icons/fa";
import { AppContext } from "../App";

export default function AboutMin() {
  const [data, setData] = useState(info);
  const { heading, description, img, inForm, lastInForm } =
    data;
  const { handleClick } = useContext(AppContext);
  const handleData = useCallback(() => {
    setData(data);
  }, [data]);
  const item1 = useRef(null);
  const item2 = useRef(null);

  const checkHeight = useCallback(() => {
    handleData();
  }, [handleData]);

  useEffect(() => {
    checkHeight();
  }, [checkHeight]);

  return (
    <section>
      <div className='section'>
        <article className='section-title'>
          <h2>About</h2>
          <p>About us</p>
        </article>
        <div className='item-3'>
          <img
            src={img}
            alt={heading}
            className='about-img'></img>
        </div>
        <article className='about-items'>
          <div className='item-1' ref={item1}>
            <h3 className='heading'>{heading}</h3>
            <p className='p'>{description}</p>
            <ul>
              {inForm.map((text) => {
                const { id, para } = text;
                return (
                  <li key={id} className='mini-para'>
                    <FaCheckCircle className='icons' />
                    {para}
                  </li>
                );
              })}
            </ul>
            <p className='last'>{lastInForm}</p>
            <Link
              to='/about'
              className='learn-more-btn'
              onClick={() => handleClick(2)}>
              Learn More
            </Link>
          </div>
          <div className='item-2'>
            <img
              ref={item2}
              src={img}
              alt={heading}
              className='about-img'></img>
          </div>
        </article>
      </div>
    </section>
  );
}
