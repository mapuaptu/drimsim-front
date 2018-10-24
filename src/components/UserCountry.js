import React, { PureComponent } from 'react';

// TODO Дописать логику Мутаций

class UserCountry extends PureComponent {
  handleChange = event => {
    const value = event.target.value;

    this.setState(() => ({
      countryValue: value,
    }));
  };

  handleClick = event => {
    event.preventDefault();
  };
  render() {
    const { country } = this.props.user;

    return country ? (
      <div className="user-country">{country}</div>
    ) : (
      <form className="user-country">
        <label htmlFor="country">Country</label>
        <input onInput={this.handleChange} type="text" id="country" />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

export default UserCountry;
