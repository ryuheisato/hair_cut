import React, { useState } from 'react';

function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // フォームが送信された時の処理をここに書く
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">本文</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <button type="submit">投稿する</button>
    </form>
  );
}

export default PostPage;
