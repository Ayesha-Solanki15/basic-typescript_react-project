import React, {useState} from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (text: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider:React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ];
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos: Todo[]) => {
      return prevTodos.concat(newTodo);
    })
  }
  const removeTodoHandler = (todoId: string) => {
    setTodos ( (prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}
export default TodosContextProvider;