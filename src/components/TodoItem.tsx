import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
};

export default TodoItem;

//we can also pass parameter as React.MouseEvent to onRemoveTodo which is ofc optional.