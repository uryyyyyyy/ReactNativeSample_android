// @flow

import * as React from "react";
import {Counter} from "./Counter";
import {connect} from "react-redux";
import {ToDoActionDispatcher} from "./Actions";

const mergeProps = (store:any, dispatch:any, ownProps:any) => {
  return {
    todoList: store.todoList,
    actions: new ToDoActionDispatcher(dispatch.dispatch, store.todoList)
  }
}

export default connect(
  (store: any) => ({todoList: store.todoList}),
  (dispatch: any) => ({dispatch: dispatch}),
  mergeProps
)(Counter);