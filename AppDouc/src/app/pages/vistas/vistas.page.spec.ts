import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistasPage } from './vistas.page';

describe('VistasPage', () => {
  let component: VistasPage;
  let fixture: ComponentFixture<VistasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
