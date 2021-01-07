import React, { FC, ReactElement } from 'react';
import { Checkbox, Button } from 'antd';
import { Todo } from '../typings';

interface props {
  item: Todo;
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<props> = ({
  item,
  changeTodo,
  deleteTodo,
}): ReactElement => {
  return (
    <div style={{ display: 'flex' }}>
      <Checkbox onChange={() => changeTodo(item.id)} checked={item.completed} />
      <span
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.content}
      </span>
      <Button type="primary" onClick={() => deleteTodo(item.id)}>
        删除
      </Button>
    </div>
  );
};

export default TodoItem;
