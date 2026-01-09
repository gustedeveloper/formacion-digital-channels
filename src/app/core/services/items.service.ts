import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Item, mockData } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  getItems(state: 'success' | 'empty' | 'error'): Observable<Item[]> {
    let response: Observable<Item[]>;

    switch (state) {
      case 'success':
        response = of(mockData);
        break;
      case 'empty':
        response = of([]);
        break;
      case 'error':
        response = throwError(() => new Error('Server error'));
        break;
    }

    return response.pipe(delay(1000));
  }
}
