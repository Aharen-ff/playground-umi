import React, { FC, ReactElement } from 'react';
import TodoItem from '../Item';
import { Todo } from '../typings';

interface props {
  list: Todo[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<props> = ({
  list,
  changeTodo,
  deleteTodo,
}): ReactElement => {
  return (
    <div>
      <div>TodoList</div>
      <ul>
        {list &&
          list.map((item: Todo) => {
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
