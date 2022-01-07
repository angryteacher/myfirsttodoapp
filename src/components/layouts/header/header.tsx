import styled from "astroturf";
import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import "../header/header.scss";

export const Header: FC = memo(() => (
  <div className="header-wrapper">
    <div className="menu-item">
      <Link to="/todo">
        <p className="link-text">ToDo App</p>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/users">
        <p className="link-text">Users List</p>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/news">
        <p className="link-text">News</p>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/about">
        <p className="link-text">About</p>
      </Link>
    </div>
  </div>
));

/*
const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  :first-child {
    padding-left: 0px;
  }
  background-color: rgba(253, 227, 176, 255);
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

 const MenuItem = styled.div`
  padding-left: 80px;
  :hover {
    text-decoration: underline;
    color: #f28313;
  }
`;

const P = styled.p`
  color: #666361;
  font-weight: bold;
`;
*/
