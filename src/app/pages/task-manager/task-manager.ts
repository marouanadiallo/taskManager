import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddTask } from '../../dialog/add-task/add-task';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks-service';

@Component({
  selector: 'tsk-task-manager',
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule
  ],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskManager {
  readonly dialog = inject(MatDialog);
  private taskService = inject(TasksService);

  displayedColumns: string[] = ['position', 'reference', 'name', 'status', 'actions'];
  dataSource = signal<Task[]>([]);

  ngOnInit(): void {
    const tasks = this.taskService.loadTasks();

    this.dataSource.set(tasks);
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTask, {
      width: '500px',
      data: { name: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task data:', result);
        const random = Math.floor(Math.random() * 10000);
        const ref = `REF-${random.toString().padStart(4, '0')}`;

        const newTask: Task = {
          reference: ref,
          name: result.name,
          description: result.description,
          status: 'pending'
        };

        const updatedTasks = this.taskService.storeTask(newTask);

        this.dataSource.set(updatedTasks);
      }
    });
  }

  onChangeStatus(reference: string){
    this.dataSource.set(this.taskService.changeStatus(reference));
  }

  onEditTask(reference: string){
    const task = this.taskService.loadOneTask(reference);
    console.log(task);

    const dialogRef = this.dialog.open(AddTask, {
      width: '500px',
      data: {
        name: task.name,
        description: task.description,
        isEditMode: true,
        reference: task.reference
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedTask = {
          name: result.name,
          description: result.description
        };

        this.dataSource.set(this.taskService.editTask(reference, updatedTask))
      }
    });

  }

  onDelete(reference: string) {
    this.dataSource.set(this.taskService.deleteTask(reference));
  }

}
