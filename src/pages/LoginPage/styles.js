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

export const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  a {
    color: #000;
  }
`;

export const logoStyles = css`
  width: 100px;
`;

export const imagesContainerStyles = css`
  position: relative;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

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

export const inputStyles = css`
  display: inline-block;
`;

export const forgotStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const forgotLinkStyles = css`
  color: var(--grey-color);

  &:hover {
    color: var(--black-color);
  }
`;

export const footerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const footerLogoStyles = css`
  width: 100px;
  margin-left: 2rem;
`;
