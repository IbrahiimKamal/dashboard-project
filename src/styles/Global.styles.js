import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

        :root {
          --primary-color: #fbf3ec;
          --secondary-color: #645c97;
          --brown-color: #973c56;
          --black-color: #000;
          --grey-color: #bfbfbf;
          --main-font-family: 'Roboto', sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--main-font-family);
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
