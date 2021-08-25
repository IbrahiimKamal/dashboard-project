/** @jsxImportSource @emotion/react */

import { btnStyles } from './styles';

const Button = ({ title, type }) => {
  return (
    <button css={btnStyles} type={`${'submit' || type}`}>
      {title}
    </button>
  );
};

export default Button;
