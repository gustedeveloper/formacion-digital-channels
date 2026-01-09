import { Component, OnInit, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';

import { Item, ViewState } from 'src/app/types';

@Component({
  selector: 'app-ex1-item-list',
  templateUrl: './ex1-item-list.component.html',
  styleUrls: ['./ex1-item-list.component.css'],
})
export class Ex1ItemListComponent implements OnInit {
  public state$ = signal<ViewState>('loading');
  public items$ = signal<Item[]>([]);

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems('success');
  }

  loadItems(newState: 'success' | 'empty' | 'error'): void {
    this.state$.set('loading');
    this.items$.set([]);

    this.itemsService
      .getItems(newState)
      .pipe(
        catchError((error) => {
          this.state$.set('error');
          return of(null);
        })
      )
      .subscribe((items) => {
        if (items === null) return;

        if (items.length > 0) {
          this.state$.set('success');
          this.items$.set(items);
        } else {
          this.state$.set('empty');
        }
      });
  }
}
