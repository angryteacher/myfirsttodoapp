import React from "react";
import { Home } from "Pages/home/home";
import styled from "astroturf";

const App = () => (
  <Wrap>
    <Home />
  </Wrap>
);

export default App;

const Wrap = styled.div``;
