/** @jsxImportSource @emotion/react */

import { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';

import { formStyles, inputSearchStyles } from './styles';

const InputSearch = () => {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <form css={formStyles}>
      <div class="fileUpload">
        <input type="file" class="upload" />
        <span>Add Document</span>
      </div>
      <input
        css={inputSearchStyles}
        type="text"
        placeholder="Search..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </form>
  );
};

export default InputSearch;
