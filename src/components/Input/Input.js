/** @jsxImportSource @emotion/react */

import { inputGroupStyles, inputStyles, labelStyles } from './styles';

const Input = ({
  type,
  placeholder,
  handleChange,
  value,
  label,
  labelId,
  fullWidth,
  styles,
  color,
}) => {
  return (
    <div css={inputGroupStyles}>
      <label css={labelStyles({ color })} htmlFor={labelId}>
        {label}
      </label>
      <input
        css={[inputStyles({ fullWidth }), styles]}
        id={labelId}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
