import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import courses from "../data/CourseData";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const { handleClick } = useContext(AppContext);
  const setData = useCallback((data) => {
    setCourseData(data);
  }, []);

  useEffect(() => {
    setData(courses);
  }, [setData]);

  return (
    <section>
      <div className='section'>
        <div className='section-title'>
          <h2>courses</h2>
          <p> popular courses</p>
        </div>
        <div className='course-items'>
          {courseData.map((course) => {
            const { id, img, name, desc, price, category } =
              course;
            return (
                <article key={id} className='course-item'>
                    <img src={img} alt={name} className='course-img'></img>
                <div className='course-header'>
                  <h4>
                    <span className='cat-color'>
                      {category}
                    </span>
                  </h4>
                  <h4 className='course-price'>${price}</h4>
                </div>
                <div className='course-desc'>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <Link
                    to='/about'
                    className='learn-more-btn'
                    onClick={() => handleClick(3)}>
                    Learn More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
