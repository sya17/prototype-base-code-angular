import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInquiryComponent } from './menu-inquiry.component';

describe('MenuInquiryComponent', () => {
  let component: MenuInquiryComponent;
  let fixture: ComponentFixture<MenuInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInquiryComponent]
    });
    fixture = TestBed.createComponent(MenuInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
