import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPythonComponent } from './list-python.component';

describe('ListPythonComponent', () => {
  let component: ListPythonComponent;
  let fixture: ComponentFixture<ListPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPythonComponent]
    });
    fixture = TestBed.createComponent(ListPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
