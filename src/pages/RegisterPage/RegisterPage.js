/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import FormImage from '../../components/FormImage/FormImage';

import logo from '../../assets/images/logo.png';

import {
  footerLogoStyles,
  footerStyles,
  forgotStyles,
  headerStyles,
  imagesContainerStyles,
  inputStyles,
  logoStyles,
} from './styles';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* image */}
          <div css={imagesContainerStyles} className="col-10 col-md-6 mx-auto">
            <FormImage title="We have a “strategic” plan its called doing things." />
          </div>
          {/* form */}
          <div className="col-10 col-md-6 mx-auto">
            <div css={headerStyles}>
              <img css={logoStyles} src={logo} alt="logo" />
              <Link to="/">Go to home</Link>
            </div>

            <Title
              title1="Join with"
              title2="thousands of"
              title3="startup!"
              text="Already have an account?"
              pathText="Login"
              path="/login"
            />
            <form>
              <Input
                fullWidth="100%"
                label="Full Name"
                labelId="username"
                type="text"
                placeholder="Melvin Carlson"
                value={userName}
                handleChange={(e) => setUserName(e.target.value)}
              />

              <Input
                fullWidth="100%"
                label="Email"
                labelId="Email"
                type="email"
                placeholder="Email@example.com"
                value={userEmail}
                handleChange={(e) => setUserEmail(e.target.value)}
              />

              <Input
                fullWidth="100%"
                label="Password"
                labelId="Password"
                type="password"
                placeholder="Enter Password"
                value={userPassword}
                handleChange={(e) => setUserPassword(e.target.value)}
              />

              <Input
                fullWidth="100%"
                label="Re-type Password"
                labelId="Password1"
                type="password"
                placeholder="Enter Password"
                value={confirmPassword}
                handleChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div css={forgotStyles}>
                <Input
                  type="checkbox"
                  labelId="checkbox"
                  label='By clicking "SIGN UP" I agree to the Terms and Conditions and Privacy Policy.'
                  styles={inputStyles}
                  color="black"
                />
              </div>

              <Button title="sign up" />
            </form>

            <div css={footerStyles}>
              <span>&copy; Copyright {new Date().getFullYear()}</span>
              <img css={footerLogoStyles} src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
