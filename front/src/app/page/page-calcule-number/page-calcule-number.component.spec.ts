import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalculeNumberComponent } from './page-calcule-number.component';

describe('PageCalculeNumberComponent', () => {
  let component: PageCalculeNumberComponent;
  let fixture: ComponentFixture<PageCalculeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCalculeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalculeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
