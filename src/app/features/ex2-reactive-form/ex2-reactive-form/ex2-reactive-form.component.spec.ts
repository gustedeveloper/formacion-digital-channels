import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ReactiveFormComponent } from './ex2-reactive-form.component';

describe('Ex2ReactiveFormComponent', () => {
  let component: Ex2ReactiveFormComponent;
  let fixture: ComponentFixture<Ex2ReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex2ReactiveFormComponent]
    });
    fixture = TestBed.createComponent(Ex2ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
