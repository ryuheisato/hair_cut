import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useParams } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";

const UserProfile = () => {
  const { postId } = useParams(); //App.jsで指定したprofile/:idを動的に取得
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageRef = ref(storage, `users/${postId}/profile.jpg`);
    getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
    });
    const getData = async () => {
      const dataRef = doc(db, "users", postId);
      const snapshot = await getDoc(dataRef);
      setData(snapshot.data());
    };
    getData();
  }, [postId]);

  return (
    <div className="container">
      <div className="profile">
        <div>
          <img src={imageUrl} alt="profile" />
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
    </div>
  );
};

export default UserProfile;
