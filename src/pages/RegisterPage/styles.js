import { css } from '@emotion/react';

export const imagesContainerStyles = css`
  position: relative;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

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

export const forgotStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const inputStyles = css`
  display: inline-block;
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
