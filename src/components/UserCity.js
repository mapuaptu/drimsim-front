import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const UPDATE_USER_CITY = gql`
  mutation UpdateUserCity($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      name
      city
    }
  }
`;

// TODO Дописать логику Мутаций, разобраться с проблеммой ID!

class UserCity extends PureComponent {
  state = {
    city: '',
  };

  handleInput = event => {
    const city = event.target.value;

    this.setState(() => ({
      city,
    }));
  };

  render() {
    const { id, city } = this.props.user;

    return city ? (
      <div className="user-city">{city}</div>
    ) : (
      <Mutation mutation={UPDATE_USER_CITY} variables={{ userID: id, city: this.state.city }}>
        {(updateUserCity, { loading, data }) => {
          return (
            <form
              onSubmit={async event => {
                event.preventDefault();
                await updateUserCity();
                return this.setState(() => ({
                  city: '',
                }));
              }}
              className="user-city"
            >
              <label htmlFor="city">Country</label>
              <input onChange={this.handleInput} value={this.state.city} type="text" id="city" />
              <button>Submit</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default UserCity;
