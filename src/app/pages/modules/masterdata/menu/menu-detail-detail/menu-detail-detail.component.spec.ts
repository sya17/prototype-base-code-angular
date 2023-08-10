import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailDetailComponent } from './menu-detail-detail.component';

describe('MenuDetailDetailComponent', () => {
  let component: MenuDetailDetailComponent;
  let fixture: ComponentFixture<MenuDetailDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDetailDetailComponent]
    });
    fixture = TestBed.createComponent(MenuDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
