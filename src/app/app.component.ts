import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems = ["laundry", "homework", "eat"];

  deleteTodo(todo) {
    this.todoItems = this.todoItems.filter((item) => {
      return item !== todo;
    });
  }

  todoSubmit(value: any) {
    if (value !== "") {
      this.todoItems.push(value.todo);
    } else {
      alert('Field requied **')
    }
  }
}