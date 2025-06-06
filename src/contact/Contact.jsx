import React from 'react';
import { useRef, useEffect, useState } from "react";
import PhoneInput from 'react-phone-number-input/input'
import emailjs from "@emailjs/browser";
import './styles.css';

const Contact = () => {

  useEffect(() => {
    const emailJSPublicKey = process.env.EMAILJS_PUBLIC_KEY;

    emailjs.init(emailJSPublicKey);
  }, []);

  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const contactPreferenceRef = useRef();
  const referralCodeRef = useRef();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(locationRef.current.value)
    console.log(phoneRef.current.value)
    console.log(contactPreferenceRef.current.value)
    console.log(referralCodeRef.current.value)
    return;
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_KEY;

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        location: locationRef.current.value,
        contactPreference: contactPreferenceRef.current.value,
        referralCode: referralCodeRef.current.value
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      alert("Thank you for your interest! We will contact you as soon as possible~");
    }
  };

  return (
    <div id='contact_container'>
      <section className='form_container'>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label className='form_label'>Name:</label>
            <input className='form_text_input' ref={nameRef} placeholder="enter your name" required />
          </div>
          <div className="form_group">
            <label className='form_label'>Email:</label>
            <input className='form_text_input' ref={emailRef} type="email" placeholder="enter your email" required />
          </div>
          <div className="form_group">
            <label className='form_label'>Location:</label>
            <select className='form_select_input' ref={locationRef} required >
              <option className='select_option' value="cali">Southern California</option>
              <option className='select_option' value="portland">Portland</option>
              <option className='select_option' value="seattle">Seattle</option>
              <option className='select_option' value="lasvegas">Las Vegas</option>
            </select>
          </div>
          <div className="form_group">
            <label className='form_label'>Phone #:</label>
            <PhoneInput
              country='US'
              ref={phoneRef}
              className='form_text_input'
              placeholder='enter your phone number'
              value={value}
              onChange={setValue}
            />
            {/* <input className='form_text_input' ref={phoneRef} type="tel" placeholder="(123)123-4567" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /> */}
          </div>
          <div className="form_group">
            <label className='form_label'>Preferred means of contact:</label>
            <select className='form_select_input' ref={contactPreferenceRef} required >
              <option className='select_option' value="phone">Phone</option>
              <option className='select_option' value="email">Email</option>
            </select>
          </div>
          <button className="submit_button" disabled={loading}>
            Submit
          </button>
          <div className="form_group">
            <label className='form_label'>[Optional] Referral #:</label>
            <input className='form_text_input' ref={referralCodeRef} type="referral_code" placeholder="enter your code" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;