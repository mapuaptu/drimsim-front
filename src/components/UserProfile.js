import React from 'react';
import UserCountry from './UserCountry';
import image from '../img/user.png';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={image} alt="" />
      </div>
      <div className="user-name">{user.name}</div>
      <div className="user-age">{user.age}</div>

      <UserCountry user={user} />

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
