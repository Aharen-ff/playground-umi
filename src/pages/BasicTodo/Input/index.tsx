import React, { FC, ReactElement, useRef, useState } from 'react';
import { Input, Button, message } from 'antd';

interface props {
  addTodo: (todo: Todo) => void;
  list: Todo[];
}

const TodoInput: FC<props> = ({ addTodo, list }): ReactElement => {
  const [inputValue, setValue] = useState<string>('');
  const placeholder = 'Enter your Todo item';

  /**
   * @func handleInputValueChange
   * @desc There is no two-way data bindings in React,
   * so we need to handle each input value change event,
   * and update state manually.
   * @param {React.ChangeEvent} e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    /**
     * I've fixed this problem. I think it's because
     * TypeScript cannot recognize what `target` is,
     * which need an explicit declaration `as HTMLInputElement`.
     */
    // const value: string = (e.target as HTMLInputElement).value;
    /**
     * updated:
     * We can declare `HTMLInputElement` when the event is being passed.
     */
    const value: string = e.target.value;
    setValue(value);
  };

  const addItem = (): void => {
    const value: string = inputValue;

    if (value.length) {
      const isExist = list.find((todo: Todo) => todo.content === value);
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
      />
      <Button type="primary" onClick={addItem}>
        添加
      </Button>
    </div>
  );
};

export default TodoInput;
