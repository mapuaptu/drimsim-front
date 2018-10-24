import React, { PureComponent } from 'react';
import UserCard from '../components/UserCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
      <div>
        <Query query={GET_ALL_USERS}>
          {({ loading, data }) => {
            const { allUsers } = data;

            return loading ? (
              <div>{null}</div>
            ) : (
              <div>
                {allUsers.map(user => (
                  <UserCard user={user} key={user.id} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Home;
