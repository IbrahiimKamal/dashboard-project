import { css } from '@emotion/react';

export const btnStyles = css`
  border: 0;
  background-color: var(--secondary-color);
  color: #fff;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 0.2rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;
