import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorQRPage } from './profesor-qr.page';

describe('ProfesorQRPage', () => {
  let component: ProfesorQRPage;
  let fixture: ComponentFixture<ProfesorQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
