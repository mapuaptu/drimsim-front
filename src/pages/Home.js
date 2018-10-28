import React, { PureComponent } from 'react';
import UserCard from '../components/UserCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';

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
  cards = [];

  play() {
    const time = 0.3;
    const timeline = new TimelineLite({ paused: true });
    const { cards } = this;

    timeline.staggerFrom(
      cards,
      time,
      {
        y: 50,
        autoAlpha: 0,
      },
      0.05,
    );
    timeline.play();
  }

  componentDidMount = () => {
    this.play();
  };

  render() {
    return (
      <StyledHome className="home">
        <div className="home-inner">
          <Query
            query={GET_ALL_USERS}
            onCompleted={() => {
              this.play();
            }}
          >
            {({ loading, data }) => {
              const { allUsers } = data;

              return loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {allUsers.map((user, index) => (
                    <div
                      ref={node => {
                        this.cards[index] = node;
                      }}
                      key={user.id}
                    >
                      <UserCard user={user} />
                    </div>
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
