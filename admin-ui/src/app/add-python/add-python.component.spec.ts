import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPythonComponent } from './add-python.component';

describe('AddPythonComponent', () => {
  let component: AddPythonComponent;
  let fixture: ComponentFixture<AddPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPythonComponent]
    });
    fixture = TestBed.createComponent(AddPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
