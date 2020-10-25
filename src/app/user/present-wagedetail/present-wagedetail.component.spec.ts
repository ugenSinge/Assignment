import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentWagedetailComponent } from './present-wagedetail.component';

describe('PresentWagedetailComponent', () => {
  let component: PresentWagedetailComponent;
  let fixture: ComponentFixture<PresentWagedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentWagedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentWagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
