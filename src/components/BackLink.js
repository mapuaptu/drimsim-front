import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackIcon from './BackIcon';

const StyledBackLink = styled.div`
  position: absolute;
  left: 40px;
  top: 30px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  .back-icon {
    margin-right: 10px;
  }

  .back-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
`;

const BackLink = props => {
  return (
    <StyledBackLink>
      <Link to="/">
        <div className="back-icon">
          <BackIcon fill="#000" width={24} height={13} />
        </div>
        <div className="back-text">Back</div>
      </Link>
    </StyledBackLink>
  );
};

export default BackLink;
