import styled from "astroturf";
import React from "react";
// @ts-ignore
import preloader from "../../../icons/preloader.gif";

export const Preloader = () => (
  <Wrap>
    <StyledImg src={preloader} />
  </Wrap>
);

const Wrap = styled.div`
  width: 100px;
  margin: 0 auto;
  padding-top: 100px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
