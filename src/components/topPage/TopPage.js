import React from 'react';
import { SignInWithGoogleButton } from '../../features/authButtons';
import './top.css';

function TopPage() {
  return (
    <React.Fragment>
      <h1 className='top-title'>SnipSwipe</h1>
      <p className='top-body'>
        SnipSwipe is an app that makes it easy to match stylists and haircut
        seekers. Stylists can post their profiles and services, and haircut
        seekers can browse and contact stylists directly. With SnipSwipe, both
        stylists and haircut seekers can communicate easily and quickly,
        ensuring a personalized and satisfactory haircut experience. Try
        SnipSwipe today and find your perfect stylist match!
      </p>
      <div className='top-button'>
        <SignInWithGoogleButton />
      </div>
    </React.Fragment>
  );
}
export default TopPage;
