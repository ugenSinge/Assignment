import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentMatchDetailComponent } from './present-match-detail.component';

describe('PresentMatchDetailComponent', () => {
  let component: PresentMatchDetailComponent;
  let fixture: ComponentFixture<PresentMatchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentMatchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
