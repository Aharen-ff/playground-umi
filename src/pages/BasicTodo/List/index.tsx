import React, { FC, ReactElement } from 'react';
import TodoItem from '../Item';

interface props {
  todoList: todo[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<props> = ({
  todoList,
  changeTodo,
  deleteTodo,
}): ReactElement => {
  return (
    <div>
      <div>TodoList</div>
      <ul>
        {todoList &&
          todoList.map((item: todo) => {
            return (
              <li key={item.id}>
                <TodoItem
                  changeTodo={changeTodo}
                  deleteTodo={deleteTodo}
                  item={item}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
