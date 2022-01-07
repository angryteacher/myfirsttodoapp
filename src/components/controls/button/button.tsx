import styled from "astroturf";
import React, { FC } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const Button: FC<IProps> = ({
  onClick,
  disabled,
  children,
  ...rest
}) => (
  <Wrap {...rest} disabled={disabled} onClick={!disabled ? onClick : undefined}>
    {children}
  </Wrap>
);

const Wrap = styled.div<{ disabled?: boolean }>`
  background: #0094ff;
  border-radius: 8px;
  font: normal normal normal 16px Roboto;
  color: #ffffff;
  padding: 5px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.disabled {
    cursor: default;
    background: #a2a2a2;
  }
  position: relative;
`;
