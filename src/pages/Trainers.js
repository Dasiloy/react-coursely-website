import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Trainer from "../components/Trainers";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";

export default function Trainers() {
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
            <h3>Trainers</h3>
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
        <Trainer />
        <BackTop/>
        <Footer/>
      </main>
    );
  }
}
