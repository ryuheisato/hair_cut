import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./board.css";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

function BoardPage() {
  const [posts, setPosts] = useState([]);
  const authId = useSelector((state) => state.auth.authId);

  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, "posts");
      const snapshot = await getDocs(postsRef);
      const postsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    };
    getPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      setPosts(posts.filter((post) => post.id !== postId));
      alert("投稿が削除されました。");
    } catch (error) {
      console.error("Error removing document: ", error);
      alert("投稿の削除に失敗しました。");
    }
  };

  return (
    <div className="container">
      <div className="displayPosts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="postName">
              <Link to={`/profile/${post.id}`}>{post.name}</Link>
            </h2>
            <div className="postContent">
              <p>性別：{post.gender}</p>
              <p>年齢：{post.age}</p>
              <p>髪型やヘアスタイルの希望：{post.hairStyle}</p>
              <p>利用可能な日時や時間帯：{post.availableTime}</p>
              <p>希望するカットの種類や難易度：{post.cutType}</p>
              <p>キャンパス内での希望する場所：{post.campusLocation}</p>
              <p>支払い方法や金額：{post.payment}</p>
              <p>その他、特記事項や要望など：{post.otherRequests}</p>
            </div>
            {post.id === authId.uid && (
              <button onClick={() => deletePost(post.id)}>投稿を削除</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardPage;
