import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: liked ? '#ff4757' : '#ced6e0',
        color: liked ? 'white' : 'black',
        padding: '6px 12px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
};

export default LikeButton;
