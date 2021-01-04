import React, { FC, ReactElement, useRef, useState } from 'react';
import { Input, Button, message } from 'antd';
import { ITodo } from '../typings';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TodoInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const [inputValue, setValue] = useState('');
  const placeholder = 'Enter your Todo item';
  const inputRef = useRef<Input>(null);

  const handleChange = (e: React.ChangeEvent): void => {
    /**
     * @TODO
     * I use state to reset Input's value,
     * but here is one small problem need to be fixed.
     */
    const value: string = e.currentTarget.value;
    setValue(value);
  };

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
