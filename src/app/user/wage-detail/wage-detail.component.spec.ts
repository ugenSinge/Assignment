import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageDetailComponent } from './wage-detail.component';

describe('WageDetailComponent', () => {
  let component: WageDetailComponent;
  let fixture: ComponentFixture<WageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
