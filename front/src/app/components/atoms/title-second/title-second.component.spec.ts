import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSecondComponent } from './title-second.component';

describe('TitleSecondComponent', () => {
  let component: TitleSecondComponent;
  let fixture: ComponentFixture<TitleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
