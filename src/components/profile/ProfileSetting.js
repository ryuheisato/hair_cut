import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { db, storage } from '../../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function ProfileSetting() {
  const navigate = useNavigate();
  const authId = useSelector((state) => state.auth.authId); //authId オブジェクトをストアから取得
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [style, setStyle] = useState('');
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null); // 画像ファイルのstateを追加
  console.log(authId);

  useEffect(() => {
    const getData = async () => {
      const dataRef = doc(db, 'users', authId.uid);
      const snapshot = await getDoc(dataRef);
      const data = snapshot.data();
      setName(data.name || '');
      setCountry(data.country || '');
      setStyle(data.style || '');
      setExperience(data.experience || '');
    };
    getData();
  }, [authId.uid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // 画像ファイルをストレージにアップロードする
      const imageRef = ref(storage, 'users/' + authId.uid + '/profile.jpg');
      await uploadBytes(imageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      const imageUrl = await getDownloadURL(imageRef);
      const docRef = setDoc(doc(db, 'users', authId.uid), {
        //プロフィールに設定する項目を現在ログインしているuidとしてデータベースに追加
        name: name,
        country: country,
        style: style,
        experience: experience,
        imageUrl: imageUrl, // アップロードした画像のダウンロードURLを Firestore に保存する
      });
      navigate('/profile');
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  return (
    <>
      <h2 className='Profile-Setting-Title'>Profile Setting</h2>
      <form onSubmit={handleSubmit}>
        <div className='Form'>
          <div className='form-item'>
            <label class='Form-Item-Label' htmlFor='name'>
              Name
            </label>
            <input
              placeholder='Full Name'
              class='Form-Item-Input'
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-item'>
            <label class='Form-Item-Label' htmlFor='country'>
              From
            </label>
            <input
              placeholder='Country'
              class='Form-Item-Input'
              type='text'
              id='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className='form-item'>
            <label class='Form-Item-Label' htmlFor='style'>
              Style
            </label>
            <input
              placeholder='e.g. Short Cut'
              class='Form-Item-Input'
              type='text'
              id='style'
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
          <div className='form-item'>
            <label class='Form-Item-Label' htmlFor='experience'>
              Experience
            </label>
            <input
              placeholder='e.g. 1 year'
              class='Form-Item-Input'
              type='text'
              id='experience'
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className='form-item'>
            <label class='Form-Item-Label' htmlFor='image'>
              Profile Image
            </label>
            <input
              type='file'
              id='image'
              onChange={(e) => handleImageChange(e)}
              accept='.png, .jpeg, jpg'
            />
          </div>
          <button class='Form-Btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfileSetting;
