import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactsComponent } from './contacts.component';

describe('Contacts.component', () => {
  let component: contactsComponent;
  let fixture: ComponentFixture<contactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(contactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});