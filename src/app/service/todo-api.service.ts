import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private url:string = '/v1/todoItem'
  constructor(private http:HttpClient) { }
  getTodo(){
    return this.http.get<{result:TodoItem[]}>(this.url)
  }

  postTodo(todo:TodoItem){
    return this.http.post<{result:TodoItem}>(this.url, todo)
  }

  putTodo(todo:TodoItem){
    return this.http.put(`${this.url}/${todo.ID}`, todo)
  }

  putStatusTodo(toggleAllBtn:boolean){
    return this.http.put(`${this.url}/Status/${toggleAllBtn}`,null)
  }

  deleteTodo(todo:TodoItem){
    return this.http.delete(`${this.url}/${todo.ID}`)
  }

  deleteCompletedTodo(){
    return this.http.delete(`${this.url}/ClearCompleted`)
  }
}
