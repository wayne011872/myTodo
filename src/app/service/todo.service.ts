import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from '../model/todo.model';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toggleAllBtn = false
  todoStatus = TodoStatus
  nowTodoStatus:number = this.todoStatus.All
  todoList:TodoItem[] = []

  constructor(private todoApiService:TodoApiService) {
    this.getData()
  }
  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn
    this.todoList.forEach(item => {
      item.Completed = this.toggleAllBtn
    })
    this.todoApiService.putStatusTodo(this.toggleAllBtn).subscribe()
  }
  checkToggleAllButton(){
    if (this.todoCompleted.length === this.todoList.length){
      this.toggleAllBtn = true
    }else{
      this.toggleAllBtn = false
    }
  }
  clickBtn(item:TodoItem) {
    item.Completed = !item.Completed

    this.todoApiService.putTodo(item).subscribe()
    this.checkToggleAllButton()
  }
  edit(item:TodoItem) {
    item.isEdit = true
  }
  setTodoStatusType(status:number) {
    this.nowTodoStatus = status
  }
  get nowTodoList():TodoItem[] {
    switch (this.nowTodoStatus) {
      case this.todoStatus.Active:
        return this.todoActive
      case this.todoStatus.Completed:
        return this.todoCompleted
      default:
        return this.todoList
    }
  }
  get todoActive() {
    return this.todoList.filter(item => !item.Completed)
  }
  get todoCompleted() {
    return this.todoList.filter(item => item.Completed)
  }
  clearCompleted() {
    this.todoApiService.deleteCompletedTodo().subscribe()
    this.todoList = this.todoActive
  }
  ngOnInit(): void {
      this.getData()
  }
  getData() {
    this.todoApiService.getTodo().subscribe(res => {
      this.todoList = res.result
    })
  }
  addItem(inputItem:string) {
    const todo: TodoItem = {
        Completed: false,
        Title: inputItem,
        isEdit: false
      }
      this.todoApiService.postTodo(todo).subscribe(data=>{
        this.todoList.push(data.result);
        console.log(this.todoList)
      });
      inputItem = ''
  }
  updateItem(item: TodoItem) {
    this.todoApiService.putTodo(item).subscribe()
    item.isEdit = false
  }
  delete(item:TodoItem) {
    this.todoApiService.deleteTodo(item).subscribe()
    this.todoList = this.todoList.filter(data=>data !== item)
  }
}
