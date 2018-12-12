import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos;
  selectedTodo;
  renameOn = '';
  id = localStorage.getItem("username");
  constructor(private todoService: UserdataService ) {}

  ngOnInit() {
    this.getTodo();
  }

  onSelect(todo) {
    this.selectedTodo = todo; 
  }

  getTodo() {
    this.todoService.getTodo(this.id)
      .subscribe(data => {
        if (!data) return;
        this.todos = data.success.todo;
      })
  }

  newTodo(e) {
    this.todoService.putNewTodo(e.target.value ,this.id)
      .subscribe(data => {
        if (!data) return;
        this.todos.push(e.target.value);
      });
  }

  onRename = (e) => {
    console.log(e);
    return this.renameOn === '' ? this.renameOn = e: this.renameOn = '';
  }

  handleDelete = (e) => {
    return this.todos = this.todos.filter(value => value.name !== e);
  }

  handleChangeTodo = (e, id) => {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i]._id === id) {
        this.todos[i].name = e.target.value;
      }
    }
    return this.renameOn = '';
  }
}
