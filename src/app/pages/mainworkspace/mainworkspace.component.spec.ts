import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainworkspaceComponent } from './mainworkspace.component';

describe('MainworkspaceComponent', () => {
  let component: MainworkspaceComponent;
  let fixture: ComponentFixture<MainworkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainworkspaceComponent]
    });
    fixture = TestBed.createComponent(MainworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
