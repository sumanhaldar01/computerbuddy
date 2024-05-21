import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaContentsComponent } from './java-contents.component';

describe('JavaContentsComponent', () => {
  let component: JavaContentsComponent;
  let fixture: ComponentFixture<JavaContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaContentsComponent]
    });
    fixture = TestBed.createComponent(JavaContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
