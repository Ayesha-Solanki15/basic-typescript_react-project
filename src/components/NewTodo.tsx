import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

const NewTodo: React.FC = () => {
  //can remove props argument and custom props defined above
  const todoCtx = useContext(TodosContext);
  //we have to provide the type and the initial input value
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //here we are not passing the event object so the type is pre-defined for such.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoTextInputRef.current?.value;

    //it could be the case the ref is not connected, tho here the ref is connected because the submitHandler will run only after the ref connectin, but we could have used this sentence outside the submitHandler somewhere and in such cases the ref is not connected(as far as we know), ts doesn't know about that, '?' tells if the ref is connected then value will be assigned to enteredText else null

    //if we are such that at this point the connection must have been established then we can use an '!', the value can't be null.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    // props.onAddTodo(enteredText);
    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

// Using '?' is not just ref specific, we can use '?' if we try to get the value and if doesn't exist then assign null.
// Using '!', we are certain that the value can't be null and we want the value associated with the variable.
