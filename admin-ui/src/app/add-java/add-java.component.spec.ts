import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJavaComponent } from './add-java.component';

describe('AddJavaComponent', () => {
  let component: AddJavaComponent;
  let fixture: ComponentFixture<AddJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJavaComponent]
    });
    fixture = TestBed.createComponent(AddJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
