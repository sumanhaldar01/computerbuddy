import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CWelcomeComponent } from './c-welcome.component';

describe('CWelcomeComponent', () => {
  let component: CWelcomeComponent;
  let fixture: ComponentFixture<CWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CWelcomeComponent]
    });
    fixture = TestBed.createComponent(CWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
