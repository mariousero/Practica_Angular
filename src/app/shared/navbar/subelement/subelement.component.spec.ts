import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubelementComponent } from './subelement.component';

describe('SubelementComponent', () => {
  let component: SubelementComponent;
  let fixture: ComponentFixture<SubelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
