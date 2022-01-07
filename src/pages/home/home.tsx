import React, { FC, memo } from "react";
import { Header } from "Components/layouts/header/header";
import styled from "astroturf";
import { TodoApp } from "Pages/Todo/TodoApp";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Users from "Pages/Users/Users";
import store from "Store/reducers";

export const Home: FC = memo(() => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrap>
        <Header />
        <Content>
          <Route path="/todo">
            <TodoApp />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Content>
      </Wrap>
    </BrowserRouter>
  </Provider>
));

const Wrap = styled.div``;

const Content = styled.div`
  margin-top: 100px;
`;
