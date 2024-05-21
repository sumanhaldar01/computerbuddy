import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCComponent } from './add-c.component';

describe('AddCComponent', () => {
  let component: AddCComponent;
  let fixture: ComponentFixture<AddCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCComponent]
    });
    fixture = TestBed.createComponent(AddCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
