import React from 'react';
import './about.css';

function AboutPage() {
  return (
    <div>
      <h1 className='about-title'>About Us</h1>
      <div className='about-body'>
        <p className='about-section'>
          We created this web application specifically for students at Brigham
          Young University in Hawaii. We noticed that there were limited options
          for haircuts near the university and the existing options were quite
          expensive. Many students expressed inconvenience in finding a suitable
          place to get their hair cut. To address this issue, we came up with
          the idea to create a platform where students with hair-cutting skills
          could post their information and services. Other students in need of a
          haircut could browse through these posts and contact the person they
          felt would be a good fit. Our goal is to create a community where
          students can connect with each other and help each other out. By
          providing a platform for students to share their skills and services,
          we hope to make it easier for everyone to get the haircuts they need
          at an affordable price. Thank you for choosing our platform and we
          hope it helps make your life a little easier!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
