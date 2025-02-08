import React from 'react';
import Image from 'next/image';

import searchIcon from '../../asset/icons/search-icon.svg';

const SearchForm = () => {
  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Caută după cod, denumire produs, tip de restaurant, retetă..."
      />
      <button className="search__button position-y-50" type="submit">
        <Image src={searchIcon} width={24} height={24} alt="search icon" />
        <span className="sr-only">Căutare prin site</span>
      </button>
    </form>
  );
};

export default SearchForm;
