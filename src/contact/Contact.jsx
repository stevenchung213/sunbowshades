import React, { isValidElement } from 'react';
import { useRef, useEffect, useState } from "react";
import PhoneInput from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input';
import emailjs from "@emailjs/browser";
import quote from './../assets/images/contact_image.png';
import './styles.css';

const Contact = () => {

  useEffect(() => {
    const emailJSPublicKey = process.env.EMAILJS_PUBLIC_KEY;

    emailjs.init(emailJSPublicKey);

    window.scrollTo(0, 0);
  }, []);

  const emailRef = useRef();
  const nameRef = useRef();
  const typeRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const contactPreferenceRef = useRef();
  const referralCodeRef = useRef();
  const messageBoxRef = useRef();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneRef.current.value[0] !== '(') return alert('please input a valid phone number');

    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(locationRef.current.value)
    console.log(phoneRef.current.value)
    console.log(contactPreferenceRef.current.value)
    console.log(referralCodeRef.current.value)
    console.log(messageBoxRef.current.value)
    console.log('do not forget to remove the return statement')
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
        referralCode: referralCodeRef.current.value,
        message: messageBoxRef.current.value,
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
      <div className='contact_section'>
        <img src={quote} alt='contact' className='contact_image' />
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
              <label className='form_label'>Type:</label>
              <select className='form_select_input' ref={typeRef} required >
                <option className='select_option' value="residential">Residential</option>
                <option className='select_option' value="commercial">Commercial</option>
              </select>
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
                error={value ? (isValidPhoneNumber(value) ? undefined : 'invalid phone #') : 'phone # required'}
              />
            </div>
            <div className="form_group">
              <label className='form_label'>Contact preference:</label>
              <select className='form_select_input' ref={contactPreferenceRef} required >
                <option className='select_option' value="phone">Phone</option>
                <option className='select_option' value="email">Email</option>
              </select>
            </div>
            <div className="form_group">
              <label className='form_label'>Referral #:</label>
              <input className='form_text_input' ref={referralCodeRef} type="referral_code" placeholder="enter code [optional]" />
            </div>
            <div className="form_group">
              <label className='form_label'>Message:</label>
              <textarea className='form_text_input message_box' ref={messageBoxRef} type="message" placeholder="enter message [optional]" />
            </div>
            <button className="submit_button" disabled={loading}>
              Submit
            </button>
          </form>
        </section>
      </div>
      <div id='contact_message' className='subheader'>
        Thank you for your interest!
        <br />
        One of our experts will contact you as soon as possible.
      </div>
    </div>
  );
};

export default Contact;