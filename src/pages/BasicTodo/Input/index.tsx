import React, { FC, ReactElement, useRef, useState } from 'react';
import { Input, Button, message } from 'antd';
import { ITodo } from '../typings';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TodoInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const [inputValue, setValue] = useState<string>('');
  const placeholder = 'Enter your Todo item';
  const inputRef = useRef<Input>(null);

  /**
   * @func handleInputValueChange
   * @desc There is no two-way data bindings in React,
   * so we need to handle each input value change event,
   * and update state manually.
   * @param {React.ChangeEvent} e
   */
  const handleChange = (e: React.ChangeEvent): void => {
    /**
     * I've fixed this problem. I think it's because
     * TypeScript cannot recognize what `target` is,
     * which need a explicit declaration `as HTMLInputElement`.
     */
    const value: string = (e.target as HTMLInputElement).value;
    setValue(value);
  };

  const addItem = (): void => {
    const value: string = inputValue;

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

      setValue('');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={inputValue}
        ref={inputRef}
      />
      <Button type="primary" onClick={addItem}>
        添加
      </Button>
    </div>
  );
};

export default TodoInput;
