import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTicketdetailComponent } from './present-ticketdetail.component';

describe('PresentTicketdetailComponent', () => {
  let component: PresentTicketdetailComponent;
  let fixture: ComponentFixture<PresentTicketdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentTicketdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentTicketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
