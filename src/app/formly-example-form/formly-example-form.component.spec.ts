import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyExampleFormComponent } from './formly-example-form.component';

describe('FormlyExampleFormComponent', () => {
  let component: FormlyExampleFormComponent;
  let fixture: ComponentFixture<FormlyExampleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyExampleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
