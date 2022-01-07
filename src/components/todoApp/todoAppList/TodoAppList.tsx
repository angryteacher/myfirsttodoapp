import React, { FC } from "react";
import styled from "astroturf";
import del from "../../../icons/delete.png";

interface ITodoAppListProps {
  tasks: any[];
  removeTask: (arg0: any) => void;
}

export const TodoAppList: FC<ITodoAppListProps> = props => (
  <div>
    {props.tasks.map(task => (
      <StyledForm key={task.id}>
        <StyledInput type="text" value={task.task} />
        <div onClick={() => props.removeTask(task.id)}>
          <StyledImg src={del} />
        </div>
      </StyledForm>
    ))}
  </div>
);

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 0.2px solid white;
  padding-left: 10px;
  border-left: 3px solid orange;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const StyledForm = styled.form`
  display: flex;

  justify-content: center;
  padding-left: 20px;
`;

const StyledImg = styled.img`
  padding-top: 5px;
`;
