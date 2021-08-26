/** @jsxImportSource @emotion/react */

import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

import logo from '../../assets/images/logo.png';
import avatarImg from '../../assets/images/avatar.png';

import {
  avatarContainerStyles,
  avatarStyles,
  headerStyles,
  infoStyles,
  logoStyles,
  messageIconStyles,
  navStyles,
  noteficationIconStyles,
  noteficationStyles,
  numberStyles,
} from './styles';

const Navbar = () => {
  return (
    <header css={headerStyles}>
      <div className="container-fluid">
        <nav css={navStyles}>
          <img css={logoStyles} src={logo} alt="logo" />
          <div css={infoStyles}>
            <AiOutlineMessage css={messageIconStyles} size={17} />
            <span css={noteficationStyles}>
              <IoIosNotificationsOutline
                size={20}
                css={noteficationIconStyles}
              />
              <span css={numberStyles}>22</span>
            </span>
            <div css={avatarContainerStyles}>
              <img css={avatarStyles} src={avatarImg} alt="avatar" />
              <span>Ronnie Woodkin</span>
              <RiArrowDownSLine
                size={20}
                style={{ color: '#989db7', cursor: 'pointer' }}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
