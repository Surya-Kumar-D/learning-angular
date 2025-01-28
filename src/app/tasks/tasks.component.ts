import { Component, Input } from '@angular/core';
import { dummyTasks } from '../tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  @Input() addTask!: boolean;

  constructor(private taskService: TasksService) {}

  tasks = dummyTasks;

  handleAddTask() {
    this.addTask = true;
  }

  handleCancelAddTask() {
    this.addTask = false;
  }

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.addTask = false;
  }
}
