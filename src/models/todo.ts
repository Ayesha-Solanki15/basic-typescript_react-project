//creating todo models, file extension is .ts instead of .tsx because it simply not a component

 class Todo {
  //gor using the values we have to define the types of the variables used.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
 }

 export default Todo;

 //We can use the class name as a constructor as well as a type.