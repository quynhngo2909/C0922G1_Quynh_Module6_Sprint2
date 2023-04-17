import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationWishlistComponent } from './reservation-wishlist.component';

describe('ReservationWishlistComponent', () => {
  let component: ReservationWishlistComponent;
  let fixture: ComponentFixture<ReservationWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
