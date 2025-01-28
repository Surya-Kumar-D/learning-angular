import { Injectable } from '@angular/core';
import { dummyTasks } from '../tasks';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      dueDate: task.date,
      summary: task.summary,
    });
  }

  removeTask(id: string) {
    console.log('I am being cliccked');

    this.tasks = this.tasks.filter((task) => task.id !== id);

    console.log(this.tasks);
  }
}
