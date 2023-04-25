import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_au2dw1t',
        'template_0gq4uet',
        e.target,
        'mhSyQjJO9DrUFxt3N'
      )
      .then(
        (result) => {
          alert('Your email has been sent.');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1 className='contact-title'>Contact Us</h1>
      <p className='contact-sentence'>
        If you have any feedback, suggestions, or questions about the website,
        please don't hesitate to contact us.
      </p>
      <p className='contact-sentence'>We would love to hear from you!</p>
      <div className='contact-container'>
        <form onSubmit={sendEmail}>
          <div className='contact-body'>
            <div className='contact-name'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                required
              />
            </div>
            <div className='contact-email'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='email'
                required
              />
            </div>
            <div className='contact-message'>
              <textarea
                className='form-control'
                cols='20'
                rows='8'
                placeholder='Your message'
                name='message'
                required
              ></textarea>
            </div>
            <div className='contact-button'>
              <input
                type='submit'
                className='contact-btn-info'
                value='Send Message'
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
