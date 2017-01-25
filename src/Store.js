// @flow
import todoList from './counter/Reducer'
import { createStore, combineReducers } from 'redux'

export default createStore(
  combineReducers({
    todoList: todoList
  })
);