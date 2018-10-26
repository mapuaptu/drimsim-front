import React from 'react';
import UserCity from './UserCity';
import image from '../img/user.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUserProfile = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  .user-image {
    margin-bottom: 20px;
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
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000;
  }

  .user-age {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 16px;
    color: #888;
  }

  .user-knowledge {
    .knowledge-block {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 21px;
    }

    .user-language {
      margin-bottom: 1px;
      font-weight: 700;
      font-size: 16px;
    }

    .user-frameworks {
      font-weight: 400;
    }
  }
`;

const UserProfile = ({ user }) => {
  return (
    <StyledUserProfile className="user-profile">
      <div className="user-image">
        <img src={image} alt="" />
      </div>
      <div className="user-name">{user.name}</div>
      <div className="user-age">{user.age} years</div>

      <UserCity id={user.id} />

      <div className="user-knowledge">
        {user.knowledge.map((item, index) => {
          return (
            <div className="knowledge-block" key={index}>
              <div className="user-language">{item.language}</div>
              <div className="user-frameworks">{item.frameworks.join(', ')}</div>
            </div>
          );
        })}
      </div>
    </StyledUserProfile>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    knowledge: PropTypes.arrayOf(
      PropTypes.shape({
        language: PropTypes.string,
        frameworks: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }),
};

export default UserProfile;
