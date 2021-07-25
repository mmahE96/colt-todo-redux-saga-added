  
import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            
              <Todo
                todos={todo.task}
                removeTodo = {removeTodo}
                toggleTodo={toggleTodo}
                id={todo.id}
                completed={todo.completed}
                editTodo={editTodo}
               
              />
            
          ))}
        </List>
      </Paper>
    );
  
}
export default TodoList;