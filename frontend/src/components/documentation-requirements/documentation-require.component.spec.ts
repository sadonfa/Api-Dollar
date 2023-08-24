import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationRequirementcomponent } from './documentation-require.component';

describe('DocumentationRequirementcomponent', () => {
  let component: DocumentationRequirementcomponent;
  let fixture: ComponentFixture<DocumentationRequirementcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationRequirementcomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationRequirementcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
