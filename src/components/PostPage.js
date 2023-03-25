import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

function PostPage() {
  const authId = useSelector((state) => state.auth.authId);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hairStyle, setHairStyle] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [cutType, setCutType] = useState("");
  const [campusLocation, setCampusLocation] = useState("");
  const [payment, setPayment] = useState("");
  const [otherRequests, setOtherRequests] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 送信処理などを実装
    try {
      setDoc(doc(db, "posts", authId.uid), {
        name: name,
        gender: gender,
        age: age,
        hairStyle: hairStyle,
        availableTime: availableTime,
        cutType: cutType,
        campusLocation: campusLocation,
        payment: payment,
        otherRequests: otherRequests,
      });
      console.log("Document written");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
        <label htmlFor="gender">性別</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="男性"
              checked={gender === "男性"}
              onChange={(e) => setGender(e.target.value)}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="女性"
              checked={gender === "女性"}
              onChange={(e) => setGender(e.target.value)}
            />
            女性
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="その他"
              checked={gender === "その他"}
              onChange={(e) => setGender(e.target.value)}
            />
            その他
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="age">年齢</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="hairStyle">髪型やヘアスタイルの希望</label>
        <textarea
          id="hairStyle"
          value={hairStyle}
          onChange={(e) => setHairStyle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="availableTime">利用可能な日時や時間帯</label>
        <textarea
          id="availableTime"
          value={availableTime}
          onChange={(e) => setAvailableTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cutType">希望するカットの種類や難易度</label>
        <textarea
          id="cutType"
          value={cutType}
          onChange={(e) => setCutType(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="campusLocation">キャンパス内での希望する場所</label>
        <input
          type="text"
          id="campusLocation"
          value={campusLocation}
          onChange={(e) => setCampusLocation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="payment">支払い方法や金額</label>
        <textarea
          id="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="otherRequests">その他、特記事項や要望など</label>
        <textarea
          id="otherRequests"
          value={otherRequests}
          onChange={(e) => setOtherRequests(e.target.value)}
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

export default PostPage;
