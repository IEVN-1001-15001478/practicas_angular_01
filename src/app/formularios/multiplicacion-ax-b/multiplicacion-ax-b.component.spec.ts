import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionAxBComponent } from './multiplicacion-ax-b.component';

describe('MultiplicacionAxBComponent', () => {
  let component: MultiplicacionAxBComponent;
  let fixture: ComponentFixture<MultiplicacionAxBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionAxBComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionAxBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
