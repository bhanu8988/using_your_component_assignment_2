import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#f1f2f6'
    }}>
      <img
        src={post.profilePic}
        alt={post.username}
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
      <div>
        <h4>{post.username}</h4>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
