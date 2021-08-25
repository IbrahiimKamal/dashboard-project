/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import {
  linkStyles,
  textStyles,
  titleContainerStyles,
  titleStyles,
} from './styles';

const Title = ({ title1, title2, title3, text, path, pathText }) => {
  return (
    <div css={titleContainerStyles}>
      <h2 css={titleStyles}>
        {title1}
        <br />
        {title2}
        <br />
        {title3}
      </h2>
      <p css={textStyles}>
        {text}{' '}
        <Link css={linkStyles} to="/sign-up">
          {pathText}
        </Link>{' '}
      </p>
    </div>
  );
};

export default Title;
