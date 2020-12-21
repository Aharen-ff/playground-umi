import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Input from './Input';
import List from './List';

import { ITodo } from './typings';

const BasicTodo: FC = (): ReactElement => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleAdd = useCallback((todo: ITodo) => {
    setList(list => [...list, todo]);
  }, []);

  return (
    <div>
      <div>Simple Todo</div>
      <Input addTodo={handleAdd} todoList={list} />
      <List />
    </div>
  );
};

export default BasicTodo;
