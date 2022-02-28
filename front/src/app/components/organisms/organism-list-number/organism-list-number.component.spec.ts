import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismListNumberComponent } from './organism-list-number.component';

describe('OrganismListNumberComponent', () => {
  let component: OrganismListNumberComponent;
  let fixture: ComponentFixture<OrganismListNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismListNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismListNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
