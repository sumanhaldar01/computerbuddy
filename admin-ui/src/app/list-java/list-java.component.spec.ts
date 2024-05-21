import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJavaComponent } from './list-java.component';

describe('ListJavaComponent', () => {
  let component: ListJavaComponent;
  let fixture: ComponentFixture<ListJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJavaComponent]
    });
    fixture = TestBed.createComponent(ListJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
