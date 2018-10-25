import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/user.png';

const UserCard = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="user-card">
        <div className="user-image">
          <img src={image} alt="" />
        </div>
        <div className="user-name">{user.name}</div>
        <div className="user-age">{user.age}</div>
        <div className="user-languages">{user.knowledge.map(item => item.language).join(', ')}</div>
      </div>
    </Link>
  );
};

export default UserCard;
