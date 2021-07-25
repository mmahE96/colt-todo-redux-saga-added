import { takeEvery, put, all } from "redux-saga/effects";

function* addTodoAsync({task}){
    
    yield put ({type:"ADD_TODO_ASYNC", task})
}

function* removeTodoAsync({id}){
    yield put ({type:"REMOVE_TODO_ASYNC", id:id})
}

function* editTodoAsync({newTask, id}){
    yield put ({type:"EDIT_TODO_ASYNC", newTask, id:id})
}

function* checkTodoAsync({id}){
    yield put ({type:"CHECK_TODO_ASYNC", id:id})
}





export function* watchAll(){
    yield all([takeEvery("REMOVE_TODO", removeTodoAsync),
     takeEvery("ADD_TODO", addTodoAsync),
     takeEvery("EDIT_TODO", editTodoAsync),
     takeEvery("CHECK_TODO", checkTodoAsync)])
}

