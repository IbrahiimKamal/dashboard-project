import { css } from '@emotion/react';

export const inputGroupStyles = css`
  margin-bottom: 2.5rem;
`;

export const labelStyles = ({ color }) => css`
  display: inline-block;
  color: ${color || 'var(--grey-color)'};
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

export const inputStyles = ({ fullWidth }) => css`
  width: ${fullWidth || 'auto'};
  border: 0;
  border-bottom: 2px solid var(--black-color);
  padding: 1rem 0;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: var(--brown-color);
  }

  &::placeholder {
    font-family: inherit;
    color: var(--grey-color);
    font-size: 1rem;
    font-weight: 700;
  }
`;
