import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/SnipSwipeLogo.png";
import { useSelector } from "react-redux";
import { SignInWithGoogleButton, SignOutButton } from "../features/authButtons";
import "./header.css";

export const Header = () => {
  const user = useSelector((state) => state.auth.isSignedIn); //ユーザーのサインイン状態を取得

  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="" />
      </div>

      <div>
        {user ? (
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </nav>
        ) : (
          <ul>
            <li className="signIn">
              <SignInWithGoogleButton />
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
