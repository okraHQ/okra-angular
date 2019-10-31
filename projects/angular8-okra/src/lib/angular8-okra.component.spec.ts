import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8OkraComponent } from './angular8-okra.component';

describe('Angular8OkraComponent', () => {
  let component: Angular8OkraComponent;
  let fixture: ComponentFixture<Angular8OkraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular8OkraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular8OkraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
