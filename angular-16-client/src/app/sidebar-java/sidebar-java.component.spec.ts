import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarJavaComponent } from './sidebar-java.component';

describe('SidebarJavaComponent', () => {
  let component: SidebarJavaComponent;
  let fixture: ComponentFixture<SidebarJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarJavaComponent]
    });
    fixture = TestBed.createComponent(SidebarJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
