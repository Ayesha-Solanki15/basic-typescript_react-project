// import React, {useContext, useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
// import Todo from './models/todo';



function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // // const todos = [
  // //   new Todo('Learn React'),
  // //   new Todo('Learn TypeScript')
  // // ];
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos(prevTodos => {
  //     return prevTodos.concat(newTodo);
  //   })
  // }
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos ( (prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // }
 
  return (
    // <div>
    <TodosContextProvider>
    {/* <NewTodo onAddTodo={addTodoHandler}/>
    <Todos items={todos} onRemoveTodo={removeTodoHandler}/> */}
    
      <NewTodo />
      <Todos />
    </TodosContextProvider>
    // </div>
  );
}

export default App;
