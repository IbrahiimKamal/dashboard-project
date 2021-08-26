/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import { ReactComponent as PersonSvg1 } from '../../assets/images/person1.svg';
import { ReactComponent as PersonSvg2 } from '../../assets/images/person2.svg';
import { ReactComponent as BackgroundSvg } from '../../assets/images/background.svg';

import {
  titleStyles,
  animation1,
  animation2,
  backgroundImageStyles,
  imageStyles,
} from './styles';

const FormImage = ({ title, isLink }) => {
  return (
    <>
      <p css={titleStyles}>
        {title} {isLink && <Link to="/sign-up">Sign Up</Link>}
      </p>
      <BackgroundSvg css={backgroundImageStyles} />
      <PersonSvg1 css={[imageStyles, animation1]} />
      <PersonSvg2 css={[imageStyles, animation2]} />
    </>
  );
};

export default FormImage;
