// @flow

import {JsonObject, IToDo} from "./Entities";
export const TODO_UPDATE: string = 'counter/increment';

const myHeaders = {
  "Content-Type": "application/json",
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

export class ToDoActionDispatcher {
  dispatch: (action: any) => any;
  todoList: IToDo[];

  constructor(
    dispatch: (action: any) => any,
    todoList: IToDo[]
  ) {
    this.dispatch = dispatch
    this.todoList = todoList
  }

  addToDo(title: string) {
    const newId = Math.random().toString(36).slice(-8)
    const newToDo: IToDo = {id: newId, title: title, isCompleted: false}
    const newToDoList = this.todoList.concat(newToDo)
    this.dispatch({type: TODO_UPDATE, todoList: newToDoList})
  }

  complete(id: string) {
    const newToDoList = this.todoList
      .map((todo) => (todo.id !== id) ? todo : Object.assign({}, todo, {isCompleted:true}))
    this.dispatch({type: TODO_UPDATE, todoList: newToDoList})
  }

  deleteToDo(id: string) {
    const newToDoList = this.todoList
      .filter((todo) => todo.id !== id)
    this.dispatch({type: TODO_UPDATE, todoList: newToDoList})
  }

  async fetchFromServer(): Promise<void> {
    const newToDoList = [{id: "1", title: "hello", isCompleted: false}]
    setTimeout(() => {
      this.dispatch({type: TODO_UPDATE, todoList: newToDoList})
    }, 500)
  }

  async saveToServer(): Promise<void> {
    await Promise.resolve("OK")
  }
}