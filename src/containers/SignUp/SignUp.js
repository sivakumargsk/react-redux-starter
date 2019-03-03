import React, { Component } from 'react';

import TextField from '../../components/TextField/TextField';
import './SignUp.css';

const formValidator = values => {
  const errors = {};
  // Password
  if (!values.password) {
    errors.password = 'Field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must have atleast 8 Characters';
  }
  // Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Field is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password and Confirm password are not same';
  }
  return errors;
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { password: '', confirmPassword: '' },
      touched: { password: false, confirmPassword: false }
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
    const { values } = this.state;
    const errorKeys = Object.keys(formValidator(values));
    if (errorKeys.length > 0) {
      this.setState({ touched: { password: true, confirmPassword: true } });
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
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <TextField
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  touched={touched.password}
                  errorText={errors.password}
                />
              </div>
            </div>
            <div>
              <button type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
