import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import TrainersData from "../data/Trainer";
import { social } from "../data/Navdata";

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const setData = useCallback((data) => {
    setTrainers(data);
  }, []);

  useEffect(() => {
    setTrainers(TrainersData);
  }, [setData]);

  return (
    <section>
      <div className='section'>
        <div className='section-title'>
          <h2>Trainers</h2>
          <p>Professional Trainers</p>
        </div>
        <div className='course-items'>
          {trainers.map((trainer) => {
            const { id, img, name, desc, role } = trainer;
            return (
              <article key={id} className='trainer-item'>
                <img
                  src={img}
                  alt={name}
                  className='trainer-img'></img>
                <div className='trainer-header'>
                  <h3>{name}</h3>
                  <h4>{role}</h4>
                </div>
                <div className='course-desc'>
                  <p>{desc}</p>
                  <ul className='trainer-links'>
                    {social.map((icons) => {
                      const { id, url, icon } = icons;
                      return (
                        <a
                          key={id}
                          href={url}>
                          {icon}
                        </a>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
