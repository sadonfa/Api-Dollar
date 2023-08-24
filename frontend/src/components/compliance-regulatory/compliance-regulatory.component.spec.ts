import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceRegulatoryComponent } from './compliance-regulatory.component';

describe('ComplianceRegulatoryComponent', () => {
  let component: ComplianceRegulatoryComponent;
  let fixture: ComponentFixture<ComplianceRegulatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceRegulatoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceRegulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});