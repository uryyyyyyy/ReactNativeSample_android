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
    try {
      const response: Response = await fetch('http://localhost:3000/api/todos', {
        method: 'GET',
        headers: myHeaders
      });

      if (response.status === 200) { //2xx
        const json: IToDo[] = await response.json();
        this.dispatch({type: TODO_UPDATE, todoList: json})
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async saveToServer(): Promise<void> {
    try {
      const response: Response = await fetch('http://localhost:3000/api/todos', {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(this.todoList)
      });

      if (response.status === 200) { //2xx
        /*do something*/
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}