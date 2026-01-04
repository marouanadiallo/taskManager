import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../../core/models';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TasksService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  private httpClient = inject(HttpClient);

  getTasks(page: number = 1, limit: number = 10) : Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl, {
      params: { _page: page.toString(), _limit: limit.toString() }
    });
  }
}
