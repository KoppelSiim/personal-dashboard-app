import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  constructor(private todoService: TodoService, private router:Router) { }
  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo:Todo){
    this.todoService.updateTodo(todo.id, {completed: !todo.completed})
  }

  onEditClick(todo:Todo){
    this.router.navigate(['/todos', todo.id])
  }
  onDeleteClick(todo:Todo){
    this.todoService.deleteTodo(todo.id)
  }

}
