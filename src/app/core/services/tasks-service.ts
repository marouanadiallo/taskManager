import { Injectable } from '@angular/core';
import { Task } from '../models/task';

const TASK_DATA: Task[] = [
  { reference: "REF-0001", name: 'Réviser le code Angular', description: "Juste une petite description", status: 'pending' },
  { reference: "REF-0002", name: 'Créer les tests unitaires', description: "Juste une petite description", status: 'completed' },
  { reference: "REF-0003", name: 'Mettre à jour la documentation', description: "Juste une petite description", status: 'pending' },
  { reference: "REF-0004", name: 'Optimiser les performances', description: "Juste une petite description", status: 'pending' },
  { reference: "REF-0005", name: 'Déployer en production', description: "Juste une petite description", status: 'pending' }
];

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {}

  loadTasks(){
    const storedTasks = localStorage.getItem('TASK_DATA');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    return this.tasks;
  }

  loadOneTask(reference: string){
    this.tasks = this.loadTasks();

    const task = this.tasks.filter((task) => task.reference === reference);

    return task[0];
  }

  storeTask(payload: Task){
    this.tasks = this.loadTasks();

    const updatedTasks = [...this.tasks, payload];

    localStorage.setItem('TASK_DATA', JSON.stringify(updatedTasks));

    return updatedTasks;
  }

  editTask(reference: string, payload: any){
    this.tasks = this.loadTasks();

    const tasks = this.tasks.map((task) => task.reference === reference ? {...task, name: payload.name, description: payload.description} : task);

    localStorage.setItem('TASK_DATA', JSON.stringify(tasks));

    return tasks;
  }

  changeStatus(reference: string){
    this.tasks = this.loadTasks();

    this.tasks = this.tasks.map(task => task.reference === reference ? { ...task, status: 'completed' } : task);

    localStorage.setItem('TASK_DATA', JSON.stringify(this.tasks));

    return this.tasks;
  }

  deleteTask(reference: string) {
    this.tasks = this.loadTasks();

    this.tasks = this.tasks.filter(task => task.reference !== reference);

    localStorage.setItem('TASK_DATA', JSON.stringify(this.tasks));

    return this.tasks;
  }

}
