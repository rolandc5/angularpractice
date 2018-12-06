import { Component, OnInit } from '@angular/core';
import { TODO } from '../mock-todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = TODO;
  constructor() {}

  ngOnInit() {
  }

  handleChange(e) {
    const newObject = {
      id: Math.random(),
      name: e.target.value
    }
    this.todos.push(newObject);
    e.target.value = '';
  }

  handleDelete(e) {
    console.log(e);
    this.todos = this.todos.filter(value =>  value.name !== e );
  }
}
