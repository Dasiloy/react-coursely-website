import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutMin from "../components/AboutMin";
import Loading from "./Loading";
import WhyUs from "../components/WhyUs";
import Courses from "../components/Courses";
import Trainer from "../components/Trainers";
import Footer from "../components/Footer";
import BackTop from '../components/BackTop'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scroll(0, 0);
    }, 2500);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <main className='main'>
        <Hero />
        <AboutMin />
        <WhyUs />
        <Courses />
        <Trainer />
        <BackTop/>
        <Footer />
      </main>
    );
  }
}
