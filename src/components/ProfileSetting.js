import React, { useState } from "react";
import "firebase/auth";
import "firebase/firestore";
import { db, storage } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function ProfileSetting() {
  const navigate = useNavigate();
  const authId = useSelector((state) => state.auth.authId); //authId オブジェクトをストアから取得
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null); // 画像ファイルのstateを追加
  console.log(authId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // 画像ファイルをストレージにアップロードする
      const imageRef = ref(storage, "users/" + authId.uid + "/profile.jpg");
      await uploadBytes(imageRef, image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });

      const imageUrl = await getDownloadURL(imageRef);
      const docRef = setDoc(doc(db, "users", authId.uid), {
        //プロフィールに設定する項目を現在ログインしているuidとしてデータベースに追加
        name: name,
        country: country,
        style: style,
        price: price,
        experience: experience,
        imageUrl: imageUrl, // アップロードした画像のダウンロードURLを Firestore に保存する
      });
      navigate("/profile");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">名前</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">出身</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="style">スタイル</label>
        <input
          type="text"
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">画像</label>
        <input
          type="file"
          id="image"
          onChange={(e) => handleImageChange(e)}
          accept=".png, .jpeg, jpg"
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

export default ProfileSetting;
