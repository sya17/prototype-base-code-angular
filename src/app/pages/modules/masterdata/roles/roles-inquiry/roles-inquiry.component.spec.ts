import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesInquiryComponent } from './roles-inquiry.component';

describe('RolesInquiryComponent', () => {
  let component: RolesInquiryComponent;
  let fixture: ComponentFixture<RolesInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesInquiryComponent]
    });
    fixture = TestBed.createComponent(RolesInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
