import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GlobalStateService } from './global-state.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(
    private http: HttpClient,
    private globalState: GlobalStateService // Inyecta GlobalStateService
  ) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(tasks => {
        if(tasks.length != 0){
          this.globalState.set('tasks', tasks);
        }
      })
    );
  }
}
