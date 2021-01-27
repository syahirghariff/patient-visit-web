import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianUpdateComponent } from './physician-update.component';

describe('PhysicianUpdateComponent', () => {
  let component: PhysicianUpdateComponent;
  let fixture: ComponentFixture<PhysicianUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
