/** @jsxImportSource @emotion/react */

import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BiBarChartAlt2, BiEnvelope } from 'react-icons/bi';
import { FiHelpCircle } from 'react-icons/fi';

import { iconStyles, linkStyles, listStyles, textStyles } from './styles';

const Sidebar = () => {
  return (
    <ul css={listStyles}>
      <li>
        <NavLink to="/dashboard" css={linkStyles}>
          <AiOutlineHome css={iconStyles} />
          <span css={textStyles}>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/" css={linkStyles}>
          <BiBarChartAlt2 css={iconStyles} />
          <span css={textStyles}>Add Funds</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/" css={linkStyles}>
          <BiEnvelope css={iconStyles} />
          <span css={textStyles}>Payment Methods</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/" css={linkStyles}>
          <FiHelpCircle css={iconStyles} />
          <span css={textStyles}>Help Center</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/" css={linkStyles}>
          <AiOutlineSetting css={iconStyles} />
          <span css={textStyles}>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
