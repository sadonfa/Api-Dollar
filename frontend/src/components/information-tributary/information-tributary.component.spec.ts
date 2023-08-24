import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTributaryComponent } from './information-tributary.component';

describe('InformationTributaryComponent', () => {
  let component: InformationTributaryComponent;
  let fixture: ComponentFixture<InformationTributaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationTributaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationTributaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
