import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';

const StyledUserCity = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  div.user-city {
    position: relative;
    top: -9px;
    margin-bottom: 32px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      left: calc(50% - 241px);
      bottom: -20px;
      width: 500px;
      height: 1px;
      background-color: #d5d5d5;

      @media (max-width: 560px) {
        left: calc(50% - 150px);
        bottom: -20px;
        width: 300px;
      }
    }
  }

  form.user-city {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 42px;
    padding-left: 19px;

    &::after {
      content: '';
      position: absolute;
      left: calc(50% - 241px);
      bottom: -21px;
      width: 500px;
      height: 1px;
      background-color: #d5d5d5;

      @media (max-width: 560px) {
        left: calc(50% - 150px);
        width: 300px;
      }
    }

    label {
      margin-right: 9px;
      font-size: 14px;
      line-height: 16px;

      @media (max-width: 560px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    input {
      display: block;
      margin-right: 10px;
      border: 1px solid #d5d5d5;
      padding: 0 10px;
      width: 170px;
      height: 30px;
      box-shadow: 0 1px inset rgba(0, 0, 0, 0.25);
      font-size: 14px;
      line-height: 16px;

      @media (max-width: 560px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    button {
      border: none;
      border-radius: 4px;
      width: 85px;
      height: 30px;
      color: #fff;
      background-color: #47b2ff;
    }

    @media (max-width: 560px) {
      flex-flow: column;
      padding-left: 0;
    }
  }
`;

const UPDATE_USER_CITY = gql`
  mutation UpdateUserCity($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      name
      city
    }
  }
`;

const GET_USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      city
    }
  }
`;

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
      <StyledUserCity>
        <Query query={GET_USER} variables={{ id: parseInt(id, 10) }}>
          {({ loading, data }) => {
            const { user } = data;

            return loading ? null : user.city ? (
              <div className="user-city">{user.city}</div>
            ) : (
              <Mutation
                mutation={UPDATE_USER_CITY}
                variables={{ userID: id, city: this.state.inputCity }}
                refetchQueries={[{ query: GET_USER, variables: { id: parseInt(id, 10) } }]}
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
                      <label htmlFor="city">Country:</label>
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
      </StyledUserCity>
    );
  }
}

export default UserCity;
