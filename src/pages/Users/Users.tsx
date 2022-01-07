import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "Common/hooks/useTypeSelector";
import { Preloader } from "Components/users/preloader/Preloader";
import { useHistory, useLocation } from "react-router-dom";
import { parse, stringify } from "query-string";
import styled from "astroturf";
import UsersList from "Components/users/usersList/UsersList";
import SearchForm from "Components/users/searchForm/SearchForm";
import { fetchUsers } from "Pages/Users/reduxToolKit";

const Users = () => {
  const { users, loading, error } = useTypedSelector(state => state.user);

  const dispatch = useDispatch();
  const { push } = useHistory();
  const { search } = useLocation();

  const { query } = parse(search);

  const onSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      push({
        search: event.target.value
          ? stringify({ query: event.target.value })
          : "",
      });
    },
    [push],
  );
  const filteredSearch = users.filter(user =>
    user.name.toLowerCase().includes(((query as string) || "").toLowerCase()),
  );

  useEffect(() => {
    dispatch(
      fetchUsers({
        onSuccess: ({ result }) => {
          console.log("-------", result.data);
        },
        onFailure: err => {
          console.log("Error", err.error?.message);
        },
      }),
    );
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrap>
      <StyledTable>
        <thead>
          <tr>
            <StyledTH>Name</StyledTH>
            <StyledTH>Username</StyledTH>
            <StyledTH>Email</StyledTH>
          </tr>
        </thead>
        <UsersList filteredSearch={filteredSearch} />
      </StyledTable>
      <SearchForm onSearch={onSearch} />
    </Wrap>
  );
};

const StyledTable = styled.table`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-collapse: collapse;
`;

const StyledTH = styled.th`
  border: solid 1px grey;
  padding: 10px;
`;

const Wrap = styled.div``;

export default Users;
