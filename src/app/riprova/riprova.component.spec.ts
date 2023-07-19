import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiprovaComponent } from './riprova.component';

describe('RiprovaComponent', () => {
  let component: RiprovaComponent;
  let fixture: ComponentFixture<RiprovaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiprovaComponent]
    });
    fixture = TestBed.createComponent(RiprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
