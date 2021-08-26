import { css } from '@emotion/react';

export const formStyles = css`
  display: flex;
  align-items: center;
`;

export const inputSearchStyles = css`
  position: relative;
  width: 60%;
  padding: 1rem 3rem;
  border: 0;
  background-color: #f9f9f9;
  border-radius: 0.2rem;
  margin-left: 2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #7f84a2;
    font-weight: 500;
  }
`;
