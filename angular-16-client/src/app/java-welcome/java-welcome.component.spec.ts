import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaWelcomeComponent } from './java-welcome.component';

describe('JavaWelcomeComponent', () => {
  let component: JavaWelcomeComponent;
  let fixture: ComponentFixture<JavaWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaWelcomeComponent]
    });
    fixture = TestBed.createComponent(JavaWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
