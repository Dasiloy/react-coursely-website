import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";
import {
  FaPhoneAlt,
  FaMapMarker,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [namError, setNamError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [subError, setSubError] = useState(false);
  const [mesError, setMesError] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    const nam = e.target.name;

    if (nam === "name") {
      setName(val);
      setNamError(false);
    }
    if (nam === "email") {
      setEmail(val);
      setNamError(false);
    }
    if (nam === "subject") {
      setSubject(val);
      setSubError(false);
    }
    if (nam === "message") {
      setMessage(val);
      setMesError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNamError(true);
    }
    if (email === "") {
      setMailError(true);
    }
    if (subject === "") {
      setSubError(true);
    }
    if (message === "") {
      setMesError(true);
    }
    if (name && email && subject && message) {
      emailjs
        .sendForm(
          "dasiloydesigners@gmail.c",
          "template_h22tct5",
          e.target,
          "user_2ccB7RAOeamcDxItiytXc"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setEmail("");
      setName("");
      setMessage("");
      setSubject("");
    }
  };

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
            <h3>contact us</h3>
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
        <section>
          <div className='section contact'>
            <div>
              <article>
                <span>
                  {" "}
                  <FaMapMarker className='contact-icon' />
                </span>
                <div>
                  <h2>location</h2>
                  <p>
                    43 Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                </div>
              </article>
              <article>
                <span>
                  <FaEnvelope className='contact-icon' />
                </span>
                <div>
                  <h2>email</h2>
                  <p>dasiloyemail2gmail.com</p>
                </div>
              </article>
              <article>
                <span>
                  <FaPhoneAlt className='contact-icon' />
                </span>
                <div>
                  <h2>phone</h2>
                  <p>+234 9087 564 321</p>
                </div>
              </article>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-header'>
                <div className='form-div'>
                  <label htmlFor='name'>Name:</label>
                  <br />
                  <input
                    style={{
                      border: namError
                        ? "1px solid red"
                        : "1px solid #e6e2e2",
                    }}
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    placeholder='Dasiloy'></input>
                </div>
                <div className='form-div'>
                  <label htmlFor='email'>Email:</label>
                  <br />
                  <input
                    style={{
                      border: mailError
                        ? "1px solid red"
                        : "1px solid #e6e2e2",
                    }}
                    type='Email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='dasiloydesigners@gmail.com'></input>
                </div>
              </div>
              <div className='form-div'>
                <label htmlFor='subject'>Subject:</label>
                <br />
                <input
                  style={{
                    border: subError
                      ? "1px solid red"
                      : "1px solid #e6e2e2",
                  }}
                  type='text'
                  name='subject'
                  id='subject'
                  value={subject}
                  onChange={handleChange}
                  placeholder='Subject'></input>
              </div>
              <div className='form-div'>
                <textarea
                  style={{
                    border: mesError
                      ? "1px solid red"
                      : "1px solid #e6e2e2",
                  }}
                  onChange={handleChange}
                  name='message'
                  value={message}
                  id='text-us'
                  rows='7'
                  placeholder='send us a message'></textarea>
              </div>
              <button type='submit' className='btn'>
                send message
              </button>
            </form>
          </div>
        </section>
        <BackTop />
        <Footer />
      </main>
    );
  }
}
