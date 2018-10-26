import React from 'react';
import UserProfile from '../components/UserProfile';
import BackLink from '../components/BackLink';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const StyledUser = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;

  .user-inner {
    position: relative;
    left: -9px;
    padding-top: 80px;
    width: 500px;

    @media (max-width: 560px) {
      left: 0;
      width: 100%;
    }
  }
`;

const GET_USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      age
      knowledge {
        language
        frameworks
      }
    }
  }
`;

const User = ({ match }) => {
  const id = parseInt(match.params.id, 10);

  return (
    <StyledUser>
      <BackLink />
      <div className="user-inner">
        <Query query={GET_USER} variables={{ id }}>
          {({ loading, data }) => {
            return loading ? <div>Loading...</div> : <UserProfile user={data.user} />;
          }}
        </Query>
      </div>
    </StyledUser>
  );
};

export default User;
