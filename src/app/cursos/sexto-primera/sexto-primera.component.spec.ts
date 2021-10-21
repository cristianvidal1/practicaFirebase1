import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoPrimeraComponent } from './sexto-primera.component';

describe('SextoPrimeraComponent', () => {
  let component: SextoPrimeraComponent;
  let fixture: ComponentFixture<SextoPrimeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoPrimeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SextoPrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
