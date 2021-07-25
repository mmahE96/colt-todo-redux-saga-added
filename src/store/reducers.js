import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, CHECK_TODO, EDIT_TODO } from './actions';

const initialState = [
        { id: 1, task: "Walk The Goldfish", completed: true },
        { id: 2, task: "Go home", completed: true },
        { id: 3, task: "clean", completed: false } 
        ]


const reducer = (state=initialState, action) => {
    

    switch(action.type){
        case ADD_TODO: 
            return [...state, {id:uuidv4(), task:action.task, completed:false }];
                    
        case REMOVE_TODO: 
           return state.filter(todo => todo.id !== action.id);
            
        case CHECK_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              );
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
              );
        default:
            return state;
    }
    
    
};

export default reducer;