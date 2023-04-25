import React from 'react';
import { Link } from 'react-router-dom';
import './help.css';

function HelpPage() {
  return (
    <div className='help-container'>
      <h1 className='help-title'>Help Page</h1>
      <div className='help-body'>
        <h4 className='help-sub'>Need help with something?</h4>
        <div className='help-section'>
          <h3 className='help-question'>
            Q: How do I create an account on this platform?
          </h3>
          <p className='help-answer'>
            To access our platform, you will need to sign in using your Google
            account. There is no need to create a separate account on our
            website. Simply click on the "SIGN IN WITH GOOGLE" button on our
            homepage and enter your Google account information to access our
            services.
          </p>
        </div>
        <div className='help-section'>
          <h3 className='help-question'>
            Q: How do I post my hair-cutting services on this platform?
          </h3>
          <p className='help-answer'>
            After creating an account, click on the "Post" button and enter your
            information.
          </p>
        </div>
        <div className='help-section'>
          <h3 className='help-question'>
            Q: How do I search for hair-cutting services on this platform?
          </h3>
          <p className='help-answer'>
            You can search for services by clicking on the "FIND STYLISTS"
            button.
          </p>
        </div>
        <div className='help-section'>
          <h3 className='help-question'>
            Q: How do I contact someone to book their hair-cutting services?
          </h3>
          <p className='help-answer'>
            Once you find a post that matches your needs, you can contact the
            person directly through the Facebook they provided in their post.
          </p>
        </div>
        <h4 className='help-sentence'>
          We hope this information helps you. If you have any further questions,
          please don't hesitate to <Link to='/contact'>Contact Us</Link> through
          our contact page.
        </h4>
      </div>
    </div>
  );
}

export default HelpPage;
