/* eslint-disable arrow-body-style */
import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    return todos?.filter((todo) => {
      return todo.checked === true;
    }).length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
