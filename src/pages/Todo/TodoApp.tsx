import React, { useState } from "react";
import styled from "astroturf";
import { TodoAppForm } from "Components/todoApp/todoAppForm/TodoAppForm";
import { TodoAppList } from "Components/todoApp/todoAppList/TodoAppList";

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [task, setTask] = useState<string>("");

  const onAddTask = (task: any) => {
    if (task) {
      const newTask = {
        id: Date.now(),
        task,
      };

      setTasks(prev => [newTask, ...prev]);
    }
  };

  const onRemoveTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <Wrap>
        <StyledH1>Todo App</StyledH1>
        <TodoAppForm setTask={setTask} task={task} addTask={onAddTask} />
        <TodoAppList tasks={tasks} removeTask={onRemoveTask} />
      </Wrap>
      <Picture>
        <img
          src="https://crosti.ru/patterns/00/00/51/43bb4a6afb/picture.jpg"
          alt=""
        />
      </Picture>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos
          illum iure laudantium magnam maiores minima minus mollitia, obcaecati
          possimus, quaerat quis, sapiente sunt suscipit tempore veniam vero
          voluptas! Ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam eos illum iure laudantium magnam maiores minima minus
          mollitia, obcaecati possimus, quaerat quis, sapiente sunt suscipit
          tempore veniam vero voluptas! Ullam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquam eos illum iure laudantium magnam
          maiores minima minus mollitia, obcaecati possimus, quaerat quis,
          sapiente sunt suscipit tempore veniam vero voluptas! Ullam? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos illum
          iure laudantium magnam maiores minima minus mollitia, obcaecati
          possimus, quaerat quis, sapiente sunt suscipit tempore veniam vero
          voluptas! Ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam eos illum iure laudantium magnam maiores minima minus
          mollitia, obcaecati possimus, quaerat quis, sapiente sunt suscipit
          tempore veniam vero voluptas! Ullam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquam eos illum iure laudantium magnam
          maiores minima minus mollitia, obcaecati possimus, quaerat quis,
          sapiente sunt suscipit tempore veniam vero voluptas! Ullam? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos illum
          iure laudantium magnam maiores minima minus mollitia, obcaecati
          possimus, quaerat quis, sapiente sunt suscipit tempore veniam vero
          voluptas! Ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam eos illum iure laudantium magnam maiores minima minus
          mollitia, obcaecati possimus, quaerat quis, sapiente sunt suscipit
          tempore veniam vero voluptas! Ullam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquam eos illum iure laudantium magnam
          maiores minima minus mollitia, obcaecati possimus, quaerat quis,
          sapiente sunt suscipit tempore veniam vero voluptas! Ullam? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos illum
          iure laudantium magnam maiores minima minus mollitia, obcaecati
          possimus, quaerat quis, sapiente sunt suscipit tempore veniam vero
          voluptas! Ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam eos illum iure laudantium magnam maiores minima minus
          mollitia, obcaecati possimus, quaerat quis, sapiente sunt suscipit
          tempore veniam vero voluptas! Ullam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aliquam eos illum iure laudantium magnam
          maiores minima minus mollitia, obcaecati possimus, quaerat quis,
          sapiente sunt suscipit tempore veniam vero voluptas! Ullam? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos illum
          iure laudantium magnam maiores minima minus mollitia, obcaecati
          possimus, quaerat quis, sapiente sunt suscipit tempore veniam vero
          voluptas! Ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam eos illum iure laudantium magnam maiores minima minus
          mollitia, obcaecati possimus, quaerat quis, sapiente sunt suscipit
          tempore veniam vero voluptas! Ullam?
        </p>
      </Text>
    </>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 400px;
  background-color: #e8e8e8;
`;

const StyledH1 = styled.h1`
  color: orange;
  padding-top: 30px;
  font-weight: lighter;
`;

const Text = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Picture = styled.div`
  width: 800px;
  margin: 50px auto;
`;
