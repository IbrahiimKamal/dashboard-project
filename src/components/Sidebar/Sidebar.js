/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import { iconStyles, linkStyles, listStyles, textStyles } from './styles';

const Sidebar = () => {
  return (
    <ul css={listStyles}>
      <li>
        <Link css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </Link>
      </li>

      <li>
        <Link css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </Link>
      </li>

      <li>
        <Link css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </Link>
      </li>

      <li>
        <Link css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </Link>
      </li>

      <li>
        <Link css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
