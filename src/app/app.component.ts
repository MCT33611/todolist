import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchAndCreateComponent } from './search-and-create/search-and-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchAndCreateComponent,TaskListComponent,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  Task = ""
  Today = new Date()
  updateEvent(key:string){
    this.Task = key;
  }
}
