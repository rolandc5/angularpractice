import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private URL = 'http://localhost:3030'
  constructor(private http: HttpClient) { }

  postNewUser(username, password) {
    return this.http.post(`${this.URL}/newUser`, { username: username, password: password });
  }

  postLogin(username, password) {
    return this.http.post(`${this.URL}/login`, { username: username, password: password });
  }

  getTodo(username) {
    return this.http.post(`${this.URL}/getTodo`, { username: username });
  }

  putNewTodo(data, username) {
    return this.http.put(`${this.URL}/newTodo`, { name: data, username: username });
  }

  postRenameTodo(data, username) {
    return this.http.post(`${this.URL}/renameTodo`, { name: data, username: username })
  }

}
