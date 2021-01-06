import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Input from './Input';
import List from './List';

const BasicTodo: FC = (): ReactElement => {
  /**
   * We hold state at top level component,
   * and pass it down to each child component.
   */
  const [list, setList] = useState<todo[]>([]);

  useEffect(() => {
    console.log('list changed', list);
  }, [list]);

  const handleAdd = useCallback((todo: todo) => {
    setList(list => [...list, todo]);
  }, []);

  /**
   * @todo
   */
  const handleDelete = useCallback((id: number) => {
    setList(list => list.filter(item => item.id !== id));
  }, []);

  /**
   * @todo
   */
  const handleItemStateChange = useCallback((id: number) => {
    setList(list =>
      list.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  }, []);

  return (
    <div>
      <div>Simple Todo</div>
      <Input addTodo={handleAdd} todoList={list} />
      <List
        changeTodo={handleItemStateChange}
        deleteTodo={handleDelete}
        todoList={list}
      />
    </div>
  );
};

export default BasicTodo;
