import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/user.png';
import styled from 'styled-components';

const StyledUserCard = styled.div`
  margin-bottom: 20px;
  border-radius: 6px;
  width: 220px;
  min-height: 292px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  a {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 40px;
    height: 100%;
    text-decoration: none;
  }

  .user-image {
    margin-bottom: 22px;
    border: 1px solid #e1e1e1;
    border-radius: 50%;
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .user-name {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000;
  }

  .user-age {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
    color: #888;
  }

  .user-languages {
    max-width: 150px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
  }
`;

const UserCard = ({ user }) => {
  return (
    <StyledUserCard className="user-card">
      <Link to={`/user/${user.id}`}>
        <div className="user-image">
          <img src={image} alt="" />
        </div>
        <div className="user-name">{user.name}</div>
        <div className="user-age">{user.age} years</div>
        <div className="user-languages">{user.knowledge.map(item => item.language).join(', ')}</div>
      </Link>
    </StyledUserCard>
  );
};

export default UserCard;
