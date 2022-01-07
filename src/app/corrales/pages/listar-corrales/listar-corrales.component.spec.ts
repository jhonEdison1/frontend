import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorralesComponent } from './listar-corrales.component';

describe('ListarCorralesComponent', () => {
  let component: ListarCorralesComponent;
  let fixture: ComponentFixture<ListarCorralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCorralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCorralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
