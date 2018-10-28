import React from 'react';
import BackLink from '../components/BackLink';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  position: relative;

  .inner {
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding-top: 150px;
    width: 700px;

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  .title {
    font-size: 25px;
  }
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <BackLink />
      <div className="inner">
        <div className="title">404 Not Found</div>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
