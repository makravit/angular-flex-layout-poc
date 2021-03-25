import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularExampleFormComponent } from './regular-example-form.component';

describe('RegularExampleFormComponent', () => {
  let component: RegularExampleFormComponent;
  let fixture: ComponentFixture<RegularExampleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularExampleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
