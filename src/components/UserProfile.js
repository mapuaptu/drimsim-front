import React from 'react';
import UserCity from './UserCity';
import image from '../img/user.png';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={image} alt="" />
      </div>
      <div className="user-name">{user.name}</div>
      <div className="user-age">{user.age}</div>

      <UserCity id={user.id} />

      <div className="user-knowledge">
        {user.knowledge.map((item, index) => {
          return (
            <div key={index}>
              <div className="user-language">{item.language}</div>
              <div className="user-frameworks">{item.frameworks.join(', ')}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
