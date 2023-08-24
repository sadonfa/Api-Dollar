import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBankingComponent } from './information-banking.component';

describe('InformationBankingComponent', () => {
  let component: InformationBankingComponent;
  let fixture: ComponentFixture<InformationBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});