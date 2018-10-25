import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';

const UPDATE_USER_CITY = gql`
  mutation UpdateUserCity($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      name
      city
    }
  }
`;

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      city
    }
  }
`;

// TODO реализовать скрытие формы и вывод города - посути это localstate - нужно использовать apollo link state

class UserCity extends PureComponent {
  state = {
    inputCity: '',
  };

  handleInput = event => {
    const inputCity = event.target.value;

    this.setState(() => ({
      inputCity,
    }));
  };

  render() {
    const { id } = this.props;

    return (
      <Query query={GET_USER} variables={{ id: parseInt(id, 10) }}>
        {({ loading, data }) => {
          const { user } = data;

          return loading ? null : user.city ? (
            <div className="user-city">{user.city}</div>
          ) : (
            <Mutation
              mutation={UPDATE_USER_CITY}
              variables={{ userID: id, city: this.state.inputCity }}
            >
              {updateUserCity => {
                return (
                  <form
                    onSubmit={async event => {
                      event.preventDefault();
                      await updateUserCity();
                      return this.setState(() => ({
                        inputCity: '',
                      }));
                    }}
                    className="user-city"
                  >
                    <label htmlFor="city">Country</label>
                    <input
                      onChange={this.handleInput}
                      value={this.state.inputCity}
                      type="text"
                      id="city"
                    />
                    <button>Submit</button>
                  </form>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UserCity;
