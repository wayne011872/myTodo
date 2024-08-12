import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoStatus } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  title = 'autofocus';
  placeholder='What needs to be done????'
  todoStatus = TodoStatus
  inputItem = ''
  editItem = ''

  get toggleAllBtn() {
    return this.todoService.toggleAllBtn
  }
  get nowTodoStatus():TodoStatus {
    return this.todoService.nowTodoStatus
  }
  get nowTodoList():TodoItem[] {
    return this.todoService.nowTodoList
  }
  get todoActive() {
    return this.todoService.todoActive
  }
  get todoCompleted() {
    return this.todoService.todoCompleted
  }
  constructor(private todoService : TodoService) { }
  toggleAll() {
    this.todoService.toggleAll()
  }
  clickBtn(item:TodoItem) {
    this.todoService.clickBtn(item)
  }
  edit(item:TodoItem) {
    item.isEdit = true
  }
  setTodoStatusType(status:number) {
    this.todoService.setTodoStatusType(status)
  }
  clearCompleted() {
    this.todoService.clearCompleted()
  }
  addItem() {
    this.todoService.addItem(this.inputItem)
    this.inputItem = ''
  }
  updateItem(item: TodoItem) {
    this.todoService.updateItem(item)
  }
  delete(item:TodoItem) {
    this.todoService.delete(item)
  }
}
