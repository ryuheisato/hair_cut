import React, { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { getDownloadURL, ref } from "firebase/storage";

function Profile() {
  const authId = useSelector((state) => state.auth.authId);
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/setting");
  };

  useEffect(() => {
    const imageRef = ref(storage, `users/${authId.uid}/profile.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
    });
    const getData = async () => {
      const dataRef = doc(db, "users", authId.uid);
      const snapshot = await getDoc(dataRef);
      setData(snapshot.data());
    };
    getData();
  }, [authId.uid]);

  return (
    <div className="container">
      <div className="profile">
        <div>
          <img src={imageUrl} alt="profile" className="profile-image" />
        </div>
        <div className="profile-item">
          <h2>{data && data.name}</h2>
        </div>
        <div className="profile-item">
          <p>出身地: {data && data.country}</p>
        </div>
        <div className="profile-item">
          <p>得意なスタイル: {data && data.specialty}</p>
        </div>
        <div className="profile-item">
          <p>価格帯: {data && data.price}</p>
        </div>
        <div className="profile-item">
          <p>ヘアカットの経験: {data && data.experience}</p>
        </div>
      </div>
      <button className="edit-button" onClick={handleClick}>
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
