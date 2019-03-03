import React, { Component } from 'react';

import TextField from '../../components/TextField/TextField';

import './SignIn.css';

const formValidator = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Field is required';
  }
  if (!values.password) {
    errors.password = 'Field is required';
  }
  return errors;
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { username: '', password: '' },
      touched: { username: false, password: false }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState(old => ({ values: { ...old.values, [name]: value } }));
  }

  handleInputBlur(e) {
    const { name } = e.target;
    this.setState(old => ({ touched: { ...old.touched, [name]: true } }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { values, touched } = this.state;
    const errorKeys = Object.keys(formValidator(values));
    if (errorKeys.length > 0) {
      this.setState({ touched: { username: true, password: true } });
    } else {
      console.log(values);
    }
  }

  render() {
    const { values, touched } = this.state;
    const errors = formValidator(values);
    return (
      <div className="signin-container">
        {/* <div>{JSON.stringify(this.state)}</div> */}
        <div className="inner-form">
          <form noValidate onSubmit={this.handleFormSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <TextField
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                touched={touched.username}
                errorText={errors.username}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <TextField
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                touched={touched.password}
                errorText={errors.password}
              />
            </div>
            <div>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
