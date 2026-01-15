import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex3RoutingComponent } from './ex3-routing.component';

describe('Ex3RoutingComponent', () => {
  let component: Ex3RoutingComponent;
  let fixture: ComponentFixture<Ex3RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex3RoutingComponent],
    });
    fixture = TestBed.createComponent(Ex3RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
