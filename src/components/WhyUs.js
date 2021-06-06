import React, { useState,useCallback,useEffect } from "react";
import data from '../data/WhyUsData';

export default function WhyUs() {
  const [whyData,setWhyData] = useState([])

  const setData = useCallback((data)=>{
    setWhyData(data);
  }, [])
  
  useEffect(() => {
    setData(data);
  },[setData])
 
  return (
    <section className='why-us'>
      <div className='section why-pad'>
        <article className='section-title'>
          <h2>why us</h2>
          <p>why choose us</p>
        </article>
        <div className='why-items'>
          {whyData.map((item) => {
            const { id, heading, description } = item;
            return (
              <article key={id} className='why-item'>
                <h3>0{id}</h3>
                <h3>{heading}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
