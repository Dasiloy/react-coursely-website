import React, { useEffect, useState} from "react";
import Loading from "./Loading";
import AboutMax from "../components/AboutMax";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";
import Review from "../components/Review";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scroll(0, 0);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main className='main'>
        <article className='page-header'>
          <div className='section'>
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed, incidunt quibusdam.
              Asperiores impedit reiciendis, molestiae Lorem
              ipsum dolor, sit amet consectetur adipisicing
              elit. Nulla ipsa veritatis ratione soluta
              deleniti dignissimos impedit consectetur
              provident repellat in?
            </p>
          </div>
        </article>
        <AboutMax />
        <article className='about-details'>
          <div className='details'>
            <div>
              <h2 className='about-header'>1290</h2>
              <p className='about-para'>Students</p>
            </div>
            <div>
              <h2 className='about-header'>150</h2>
              <p className='about-para'>Courses</p>
            </div>
          </div>
          <div className='details'>
            <div>
              <h2 className='about-header'>74</h2>
              <p className='about-para'>Seminars</p>
            </div>
            <div>
              <h2 className='about-header'>15</h2>
              <p className='about-para'>Trainers</p>
            </div>
          </div>
        </article>
        <section>
          <div className='section'>
            <article className='section-title'>
              <h2>Testimonials</h2>
              <p>What are they saying</p>
            </article>
            <Review/>
          </div>
        </section>
        <BackTop />
        <Footer />
      </main>
    );
  }
}
