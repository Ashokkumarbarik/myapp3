import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../app.model';

@Component({
  selector: 'app-createtask',
  templateUrl: './createTask.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Input() tasksInput: any;
  @Output() newItemEvent = new EventEmitter<Task[]>();
  task: any;
  ngOnInit() {

  }
  onAdd() {
    let taskObj = new Task();
    taskObj.isComplete = false;
    taskObj.text = this.task;
    this.tasksInput.push(taskObj);
    this.newItemEvent.emit(this.tasksInput);
  }

}
