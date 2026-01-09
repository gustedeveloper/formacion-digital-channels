import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ItemListComponent } from './ex1-item-list.component';

describe('Ex1ItemListComponent', () => {
  let component: Ex1ItemListComponent;
  let fixture: ComponentFixture<Ex1ItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex1ItemListComponent]
    });
    fixture = TestBed.createComponent(Ex1ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
