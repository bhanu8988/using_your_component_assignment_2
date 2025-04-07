import React from 'react';
import PostCard from './components/postcard';
import './App.css';

const posts = [
  {
    id: 1,
    username: 'john_doe',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: 'Enjoying the sunset 🌇'
  },
  {
    id: 2,
    username: 'jane_doe',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    content: 'Just had the best coffee ☕'
  },
  {
    id: 3,
    username: 'mario_kart',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    content: 'Won my first race! 🏁'
  }
];

function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h2>📸 Social Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
