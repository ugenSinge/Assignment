import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfixtureComponent } from './addfixture.component';

describe('AddfixtureComponent', () => {
  let component: AddfixtureComponent;
  let fixture: ComponentFixture<AddfixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
