import { css, keyframes } from '@emotion/react';

// ######## animation #########
const fadeDownToUp = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }

  40% {
    transform: translate3d(0, 20px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
  `;

const fadeUpToDown = keyframes`
    0% {
    transform: translate3d(0, 0, 0);
  }

  40% {
    transform: translate3d(0, -20px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
  `;

export const animation1 = css`
  animation: ${fadeDownToUp} 5s ease infinite;
`;

export const animation2 = css`
  animation: ${fadeUpToDown} 10s ease infinite;
`;
// ######## end of animation #########

export const titleStyles = css`
  text-align: center;
  font-size: 2rem;
  width: 80%;
  margin: 0 auto;

  a {
    color: var(--secondary-color);
    text-decoration: underline;
  }
`;

export const backgroundImageStyles = css`
  position: absolute;
  display: block;
  width: 90%;
`;

export const imageStyles = css`
  width: 250px;
`;
