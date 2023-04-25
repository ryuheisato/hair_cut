import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './board.css';
import { Link, useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { BiTrash } from 'react-icons/bi';
import { FaEdit, FaFacebookSquare } from 'react-icons/fa';

function BoardPage() {
  const [posts, setPosts] = useState([]);
  const authId = useSelector((state) => state.auth.authId);
  const navigate = useNavigate();
  const [filterVal, setFilterVal] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, 'posts');
      const snapshot = await getDocs(postsRef);
      const postsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    };
    getPosts();
  }, []);

  const editPost = async () => {
    navigate('/post/edit');
  };

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, 'posts', postId));
      setPosts(posts.filter((post) => post.id !== postId));
      alert('The post has been deleted.');
    } catch (error) {
      console.error('Error removing document: ', error);
      alert('Failed to delete the post.');
    }
  };

  return (
    <div className='container'>
      <div className='search-by-name'>
        <input
          className='search-box'
          type='text'
          placeholder='Search by name'
          value={filterVal}
          onChange={(e) => setFilterVal(e.target.value)}
        />
      </div>
      <div className='displayPosts'>
        {posts
          .filter(
            (post) =>
              post.name.toLowerCase().indexOf(filterVal.toLowerCase()) !== -1
          )
          .map((post) => (
            <div key={post.id} className='post'>
              <div className='name-icon'>
                <h2 className='postName'>
                  <Link to={`/profile/${post.id}`}>{post.name}</Link>
                </h2>
                <a
                  href={post.url}
                  target='_blank'
                  rel='noreferrer'
                  className='facebook-icon'
                >
                  <FaFacebookSquare />
                </a>
              </div>
              <div className='postContent'>
                <div className='content-label'>
                  <p className='content-p-label'>Gender </p>
                  <p className='content-p-label'>Price </p>
                  <p className='content-p-label'>Location </p>
                  <p className='content-p-label'>Time </p>
                  <p className='content-p-label'>Any Notice </p>
                </div>
                <div className='content-content'>
                  <p className='content-p'>- {post.gender}</p>
                  <p className='content-p'>- {post.payment}</p>
                  <p className='content-p'>- {post.campusLocation}</p>
                  <p className='content-p'>- {post.availableTime}</p>
                  <p className='content-p'>- {post.otherRequests}</p>
                </div>
              </div>
              {post.id === authId.uid && (
                <div className='board-button'>
                  <button
                    className='board-edit'
                    onClick={() => editPost(post.id)}
                  >
                    <FaEdit />
                  </button>
                  <button onClick={() => deletePost(post.id)}>
                    <BiTrash />
                  </button>
                </div>
              )}
            </div>
          ))}
        {posts.filter(
          (post) =>
            post.name.toLowerCase().indexOf(filterVal.toLowerCase()) !== -1
        ).length === 0 && (
          <h1 className='contents-notfound'>Contents not found...</h1>
        )}
      </div>
    </div>
  );
}

export default BoardPage;
