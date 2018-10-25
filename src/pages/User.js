import React from 'react';
import UserProfile from '../components/UserProfile';
import BackLink from '../components/BackLink';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      age
      city
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
    <div>
      <BackLink />
      {/* TODO следать заглушку когда вводим id типа строка или не валидное число */}
      <Query query={GET_USER} variables={{ id }}>
        {({ loading, data }) => {
          return loading ? null : <UserProfile user={data.user} />;
        }}
      </Query>
    </div>
  );
};

export default User;
