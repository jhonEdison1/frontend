import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCorralComponent } from './agregar-corral.component';

describe('AgregarCorralComponent', () => {
  let component: AgregarCorralComponent;
  let fixture: ComponentFixture<AgregarCorralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCorralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCorralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
