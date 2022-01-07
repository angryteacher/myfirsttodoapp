import React from "react";
import styled from "astroturf";

interface ISearchForm {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = (props: ISearchForm) => (
  <SearchFormWrap>
    <form>
      <input onChange={props.onSearch} placeholder="Search" type="text" />
    </form>
  </SearchFormWrap>
);

const SearchFormWrap = styled.div`
  width: 200px;
  margin: 50px auto 0;
`;

export default SearchForm;
