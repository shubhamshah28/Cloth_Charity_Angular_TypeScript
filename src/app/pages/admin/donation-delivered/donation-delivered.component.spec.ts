import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDeliveredComponent } from './donation-delivered.component';

describe('DonationDeliveredComponent', () => {
  let component: DonationDeliveredComponent;
  let fixture: ComponentFixture<DonationDeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationDeliveredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
