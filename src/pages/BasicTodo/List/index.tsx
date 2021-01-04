import React, { FC, ReactElement } from 'react';
import { ITodo } from '../typings';

interface IProps {
  todoList: ITodo[];
}

const TodoList: FC<IProps> = ({ todoList }): ReactElement => {
  return (
    <div>
      <div>TodoList</div>
      <ul>
        {todoList &&
          todoList.map((item: ITodo) => {
            /**
             * @TODO
             * We need implement a list item component
             * to display todo content and control it.
             */
            return <li key={item.id}>{item.content}</li>;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
