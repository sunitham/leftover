import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickmeComponent } from './pickme.component';

describe('PickmeComponent', () => {
  let component: PickmeComponent;
  let fixture: ComponentFixture<PickmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
