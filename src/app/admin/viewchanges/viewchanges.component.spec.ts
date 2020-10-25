import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchangesComponent } from './viewchanges.component';

describe('ViewchangesComponent', () => {
  let component: ViewchangesComponent;
  let fixture: ComponentFixture<ViewchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
