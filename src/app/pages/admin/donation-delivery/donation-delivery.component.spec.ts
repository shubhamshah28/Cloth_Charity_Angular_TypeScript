import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDeliveryComponent } from './donation-delivery.component';

describe('DonationDeliveryComponent', () => {
  let component: DonationDeliveryComponent;
  let fixture: ComponentFixture<DonationDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
