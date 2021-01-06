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
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    console.log('list changed', list);
  }, [list]);

  /**
   * @func handleTodoItemAdd
   * @param {todo} todo
   */
  const handleAdd = useCallback((todo: Todo) => {
    setList((list: Todo[]) => [...list, todo]);
  }, []);

  /**
   * @func handleTodoItemDelete
   * @desc delete todo-item by id
   * @param {number} id
   */
  const handleDelete = useCallback((id: number) => {
    setList((list: Todo[]) => list.filter((item: Todo) => item.id !== id));
  }, []);

  /**
   * @func handleTodoItemStateChange
   * @desc change todo-item's complete state by id
   * @param {number} id
   */
  const handleItemStateChange = useCallback((id: number) => {
    setList((list: Todo[]) =>
      list.map((item: Todo) =>
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
      <Input addTodo={handleAdd} list={list} />
      <List
        changeTodo={handleItemStateChange}
        deleteTodo={handleDelete}
        list={list}
      />
    </div>
  );
};

export default BasicTodo;
