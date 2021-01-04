import React, { FC, ReactElement, useRef, useState } from 'react';
import { Input, Button, message } from 'antd';
import { ITodo } from '../typings';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TodoInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const placeholder = 'Enter your Todo item';
  const inputRef = useRef<Input>(null);

  const addItem = (): void => {
    const value: string = inputRef.current!.state.value.trim();

    if (value.length) {
      const isExist = todoList.find(todo => todo.content === value);
      if (isExist) {
        message.error('This item is existed');
        return;
      }

      addTodo({
        id: Date.now(),
        content: value,
        completed: false,
      });

      /**
       * @TODO
       * After adding, we need reset input,
       * but I'm still trying to figure out
       * how Antd Input works.
       */
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Input placeholder={placeholder} ref={inputRef} />
      <Button type="primary" onClick={addItem}>
        添加
      </Button>
    </div>
  );
};

export default TodoInput;
