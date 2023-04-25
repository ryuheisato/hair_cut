import React, { useState, useEffect } from 'react';
import './post.css';
import { db } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostEdit() {
  const navigate = useNavigate();
  const authId = useSelector((state) => state.auth.authId);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [campusLocation, setCampusLocation] = useState('');
  const [payment, setPayment] = useState('');
  const [url, setUrl] = useState('');
  const [otherRequests, setOtherRequests] = useState('');

  useEffect(() => {
    const getData = async () => {
      const dataRef = doc(db, 'posts', authId.uid);
      const snapshot = await getDoc(dataRef);
      const data = snapshot.data();
      setName(data.name || '');
      setGender(data.gender || '');
      setAvailableTime(data.availableTime || '');
      setCampusLocation(data.campusLocation || '');
      setPayment(data.payment || '');
      setUrl(data.url || '');
      setOtherRequests(data.otherRequests || '');
    };
    getData();
  }, [authId.uid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 送信処理などを実装
    try {
      setDoc(doc(db, 'posts', authId.uid), {
        name: name,
        gender: gender,
        availableTime: availableTime,
        campusLocation: campusLocation,
        payment: payment,
        url: url,
        otherRequests: otherRequests,
      });
      navigate('/stylists');
      console.log('Document written');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='Form'>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='name'>
            Name
          </label>
          <input
            placeholder='Full Name'
            required
            class='Form-Item-Input'
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='gender'>
            Gender
          </label>
          <div>
            <label>
              <input
                type='radio'
                name='gender'
                value="Men's Only"
                checked={gender === "Men's Only"}
                onChange={(e) => setGender(e.target.value)}
              />
              Men's Only
            </label>
            <label>
              <input
                type='radio'
                name='gender'
                value="Women's Only"
                checked={gender === "Women's Only"}
                onChange={(e) => setGender(e.target.value)}
              />
              Women's Only
            </label>
            <label>
              <input
                type='radio'
                name='gender'
                value="Men's and Women's"
                checked={gender === "Men's and Women's"}
                onChange={(e) => setGender(e.target.value)}
              />
              Both
            </label>
          </div>
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='availableTime'>
            Available Time
          </label>
          <input
            placeholder='e.g. 7-9 pm on weekdays'
            required
            class='Form-Item-Input'
            id='availableTime'
            value={availableTime}
            onChange={(e) => setAvailableTime(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='campusLocation'>
            Location
          </label>
          <input
            placeholder='e.g. Hale 5'
            required
            class='Form-Item-Input'
            type='text'
            id='campusLocation'
            value={campusLocation}
            onChange={(e) => setCampusLocation(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='payment'>
            Price
          </label>
          <input
            placeholder='e.g. $10'
            required
            class='Form-Item-Input'
            id='payment'
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='payment'>
            Facebook URL
          </label>
          <input
            placeholder='Your FB Profile URL'
            type='url'
            required
            class='Form-Item-Input'
            id='payment'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label class='Form-Item-Label' htmlFor='otherRequests'>
            Any Notice
          </label>
          <textarea
            class='Form-Item-Textarea'
            id='otherRequests'
            value={otherRequests}
            onChange={(e) => setOtherRequests(e.target.value)}
          />
        </div>
        <button class='Form-Btn' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default PostEdit;
