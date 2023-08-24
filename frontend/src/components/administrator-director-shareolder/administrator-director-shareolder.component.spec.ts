import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDirectorShareolderComponent } from './administrator-director-shareolder.component';

describe('AdministratorDirectorShareolderComponent', () => {
  let component: AdministratorDirectorShareolderComponent;
  let fixture: ComponentFixture<AdministratorDirectorShareolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorDirectorShareolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorDirectorShareolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
