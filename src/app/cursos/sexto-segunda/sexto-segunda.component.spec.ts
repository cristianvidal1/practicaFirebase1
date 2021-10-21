import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoSegundaComponent } from './sexto-segunda.component';

describe('SextoSegundaComponent', () => {
  let component: SextoSegundaComponent;
  let fixture: ComponentFixture<SextoSegundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoSegundaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SextoSegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
