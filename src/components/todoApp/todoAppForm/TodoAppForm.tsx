import React, { ChangeEvent, FC, MouseEvent } from "react";
import styled from "astroturf";
import plus from "../../../icons/plus-16.png";

interface ITodoAppFormProps {
  setTask: (arg0: string) => void;
  addTask: (arg0: any) => void;
  task: string;
}

export const TodoAppForm: FC<ITodoAppFormProps> = props => {
  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTask(e.currentTarget.value);
  };

  const onButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    props.addTask(props.task);
    props.setTask("");
  };

  return (
    <form>
      <StyledInput
        onChange={onTaskChange}
        value={props.task}
        placeholder="Add task"
        type="text"
      />
      <StyledButton onClick={onButtonClick}>
        <img src={plus} />
      </StyledButton>
    </form>
  );
};

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 0.2px solid white;
  padding-left: 10px;
  position: relative;
  right: -30px;
`;

const StyledButton = styled.button`
  position: relative;
  z-index: 3;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: orange;
  border: 1px solid orange;
  margin-bottom: 5px;
`;
