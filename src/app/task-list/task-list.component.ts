import { Component , Output,EventEmitter} from '@angular/core';
import { LocalDataService } from '../local-data.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Output() updateevent = new EventEmitter<string>();
  constructor(private localdataService: LocalDataService) {}
  
  delete(key:string){
    this.localdataService.clearData(key);
  }
  getAll(){
    return this.localdataService.getAllData()
  }
  updateIsComplete(key: string): void {
    
    
    let task = this.localdataService.getData(key);

    if (task) {
      this.localdataService.clearData(key);

      task.IsComplete = !task.IsComplete;

      this.localdataService.saveData(key, task);
      console.log("asldkfjasldkfj");
    }
  }

  update(key:string){
    this.updateevent.emit(key);
    this.localdataService.clearData(key)
  }
}
