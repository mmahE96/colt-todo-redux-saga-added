import React from "react";
import TodoApp from "./TodoApp";
import { connect } from "react-redux";
//import {ADD_TODO, REMOVE_TODO, EDIT_TODO, CHECK_TODO} from "./store/actions"



function App({todos, addTodo, removeTodo, toggleTodo, editTodo}) {  
  
  return (
  <div> 
  
   
    <TodoApp todos={todos} addTodo={addTodo} editTodo={editTodo}
     removeTodo={removeTodo} toggleTodo={toggleTodo}/> 
    </div>);
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispachToProps = dispatch => {
  return {
    addTodo: (value) => dispatch({ type: "ADD_TODO", task:value }),
    removeTodo: (id) => dispatch({ type: "REMOVE_TODO", id: id }),
    toggleTodo: (id) => dispatch({type: "CHECK_TODO", id: id}),
    editTodo: (value, id) => dispatch ({type: "EDIT_TODO", newTask:value, id:id})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
