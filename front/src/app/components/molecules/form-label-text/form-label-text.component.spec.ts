import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabelTextComponent } from './form-label-text.component';

describe('FormLabelTextComponent', () => {
  let component: FormLabelTextComponent;
  let fixture: ComponentFixture<FormLabelTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLabelTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLabelTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
