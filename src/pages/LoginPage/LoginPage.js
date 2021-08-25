/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

import { ReactComponent as PersonSvg1 } from '../../assets/images/person1.svg';
import { ReactComponent as PersonSvg2 } from '../../assets/images/person2.svg';
import { ReactComponent as BackgroundSvg } from '../../assets/images/background.svg';
import logo from '../../assets/images/logo.png';

import {
  animation1,
  animation2,
  backgroundImageStyles,
  footerLogoStyles,
  footerStyles,
  forgotLinkStyles,
  forgotStyles,
  headerStyles,
  imagesContainerStyles,
  imageStyles,
  inputStyles,
  logoStyles,
  titleStyles,
} from './styles';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* image */}
          <div css={imagesContainerStyles} className="col-10 col-md-6 mx-auto">
            <p css={titleStyles}>
              Want your best management software?{' '}
              <Link to="/sign-up">Sign Up</Link>
            </p>
            <BackgroundSvg css={backgroundImageStyles} />
            <PersonSvg1 css={[imageStyles, animation1]} />
            <PersonSvg2 css={[imageStyles, animation2]} />
          </div>
          {/* form */}
          <div className="col-10 col-md-6 mx-auto">
            <div css={headerStyles}>
              <img css={logoStyles} src={logo} alt="logo" />
              <Link to="/">Go to home</Link>
            </div>

            <Title
              title1="Hi buddy,"
              title2="welcome"
              title3="Back!"
              text="Still don't have an account?"
              pathText="Sign up"
            />
            <form>
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

              <div css={forgotStyles}>
                <Input
                  type="checkbox"
                  labelId="checkbox"
                  label="Keep me logged in"
                  styles={inputStyles}
                  color="black"
                />
                <Link to="/login" css={forgotLinkStyles}>
                  Forgot Password
                </Link>
              </div>

              <Button title="login" />
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

export default LoginPage;
