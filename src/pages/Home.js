import React, { PureComponent } from 'react';
import UserCard from '../components/UserCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #e5e5e5;

  .home-inner {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-top: 49px;
    padding-bottom: 118px;
    width: 700px;

    @media (max-width: 750px) {
      width: 460px;
    }

    @media (max-width: 550px) {
      width: 220px;
    }
  }
`;

const GET_ALL_USERS = gql`
  query {
    allUsers {
      id
      name
      age
      knowledge {
        language
      }
    }
  }
`;

class Home extends PureComponent {
  render() {
    return (
      <StyledHome className="home">
        <div className="home-inner">
          <Query query={GET_ALL_USERS}>
            {({ loading, data }) => {
              const { allUsers } = data;

              return loading ? (
                <div>{null}</div>
              ) : (
                <>
                  {allUsers.map(user => (
                    <UserCard user={user} key={user.id} />
                  ))}
                </>
              );
            }}
          </Query>
        </div>
      </StyledHome>
    );
  }
}

export default Home;
