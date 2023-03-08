import React from 'react'
import { SignInWithGoogleButton } from '../features/authButtons'

function TopPage() {
    return (
        <React.Fragment>
            <h1>タイトル</h1>
            <p>SnipSwipe is an app that makes it easy to match stylists and haircut seekers. 
                Stylists can post their profiles and services, and haircut seekers can browse and contact stylists directly. 
                With SnipSwipe, both stylists and haircut seekers can communicate easily and quickly, ensuring a personalized and satisfactory haircut experience. 
                Don't settle for a bad haircut - try SnipSwipe today and find your perfect stylist match!</p>
            <div><SignInWithGoogleButton /></div>
        </React.Fragment>
    )
}
export default TopPage