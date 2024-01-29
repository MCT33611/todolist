import { Component,Inject,Input } from '@angular/core';
import { LocalDataService } from '../local-data.service';
import {FormsModule} from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-search-and-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-and-create.component.html',
  styleUrl: './search-and-create.component.css',
  providers: [LocalDataService],
})
export class SearchAndCreateComponent {
  constructor(private localdataService: LocalDataService) {}
  @Input() task = ""
  
  Task:string = this.task;

  Add():void{
    if(this.Task != ("" || null)){
      let data = {task:this.Task,IsCompleted:false};
      this.localdataService.saveData(this.Task,data);
      this.Task = ""
    }
  }
}
