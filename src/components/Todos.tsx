import React, { useContext } from 'react';
// import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';
//there is no ts specific rule for adding css

//within we the <> brackets we define our own props which the function receives as custom props and in the component we can use those custom props

// const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {

const Todos: React.FC = () => {
  //now can remove props argument after using context,and our own props type definition

  const todosCtx = useContext(TodosContext);
  
  return (
    
    // <ul className={classes.todos}>
    //   {props.items.map( item => <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>)}
    // </ul>
    <ul className={classes.todos}>
      {todosCtx.items.map( item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>)}
    </ul>
    
  )
}
export default Todos;

//we have to define the type of both custom props and built-in props(like children) in react-ts
//we want to work around with it, we can use React.FC which defines that it's a functional component, which is already a generic type, and again i'm adding a generic value for the generic FC type

//bind helps us to pre-configure a function for future execution