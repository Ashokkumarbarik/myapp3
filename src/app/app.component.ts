import { Component, OnInit } from '@angular/core';
import { Task } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularAssignement';
  tasks: Task[] = [];
  allTasks: Task[] = [];
  activeTasks: Task[] = [];
  completedTasks: Task[] = [];
  activeItems: any;

  ngOnInit() {
    this.assignedValue();
    this.allTasks = this.tasks;
    this.getActiveItems();

  }


  onAll() {
    this.allTasks = this.tasks;
    this.getActiveItems();

  }
  onActive() {
    this.allTasks = this.tasks.filter(x => !x.isComplete);
    this.getActiveItems();
  }
  onCompleted() {
    this.allTasks = this.tasks.filter(x => x.isComplete);

   this.getActiveItems();
  }
  onClear() {
    this.allTasks = [];
    this.activeItems = null;
  }

  private assignedValue() {
    let task = new Task();
    task.isComplete = false;
    task.text = 'One';
    this.tasks.push(task);
    let task1 = new Task();
    task1.isComplete = true;
    task1.text = 'Two';
    this.tasks.push(task1);
    let task3 = new Task();
    task3.isComplete = true;
    task3.text = 'Three';
    this.tasks.push(task3);
  }
  private getActiveItems() {
    this.activeItems = this.tasks.filter(x => !x.isComplete).length;
  }

}


