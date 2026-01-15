import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormSubmitService {
  constructor() {}

  submit<T>(_payload: T): Observable<void> {
    return of(void 0).pipe(delay(500));
  }
}
