import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  localItem : string | null | undefined;
  todos : Todo[];

  constructor() {
    
      if(typeof localStorage != 'undefined'){
        this.localItem = localStorage.getItem("todos");
      }else if(typeof sessionStorage != 'undefined'){
        this.localItem = sessionStorage.getItem("todos");
      }
    
    if(this.localItem == null){
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }

  }

  ngOnInit() {}

    deleteTodo(todo : Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      
        if(typeof localStorage != 'undefined'){
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }else if(typeof sessionStorage != 'undefined'){
          sessionStorage.setItem("todos", JSON.stringify(this.todos));
        }else{
          console.log('Web storage is not supported in this environment.');
        }
    }

    addTodo(todo : Todo){
      console.log(todo);
      this.todos.push(todo);
      
        if(typeof localStorage != 'undefined'){
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }else if(typeof sessionStorage != 'undefined'){
          sessionStorage.setItem("todos", JSON.stringify(this.todos));
        }else{
          console.log('Web storage is not supported in this environment.');
        }
    }

    toggleTodo(todo : Todo){
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active;
      
        if(typeof localStorage != 'undefined'){
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }else if(typeof sessionStorage != 'undefined'){
          sessionStorage.setItem("todos", JSON.stringify(this.todos));
        }else{
          console.log('Web storage is not supported in this environment.');
        }

        console.log(todo);
    }
  
}
