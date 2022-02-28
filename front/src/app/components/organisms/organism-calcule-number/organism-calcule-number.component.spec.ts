import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismCalculeNumberComponent } from './organism-calcule-number.component';

describe('OrganismCalculeNumberComponent', () => {
  let component: OrganismCalculeNumberComponent;
  let fixture: ComponentFixture<OrganismCalculeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismCalculeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismCalculeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
