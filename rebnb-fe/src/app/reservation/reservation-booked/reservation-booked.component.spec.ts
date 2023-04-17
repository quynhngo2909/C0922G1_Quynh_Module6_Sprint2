import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBookedComponent } from './reservation-booked.component';

describe('RevervationBookedComponent', () => {
  let component: ReservationBookedComponent;
  let fixture: ComponentFixture<ReservationBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
