import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainworkspaceContentComponent } from './mainworkspace-content.component';

describe('MainworkspaceContentComponent', () => {
  let component: MainworkspaceContentComponent;
  let fixture: ComponentFixture<MainworkspaceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainworkspaceContentComponent]
    });
    fixture = TestBed.createComponent(MainworkspaceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
