import React from "react";
import styled from "astroturf";

interface IUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersList = (props: { filteredSearch: IUserProps[] }) => (
  <>
    {props.filteredSearch.map((user: IUserProps) => (
      <tbody key={user.id}>
        <StyledTD>{user.name}</StyledTD>
        <StyledTD>{user.username}</StyledTD>
        <StyledTD>{user.email}</StyledTD>
      </tbody>
    ))}
  </>
);

const StyledTD = styled.td`
  border: solid 1px grey;
  padding: 10px;
`;

export default UsersList;
