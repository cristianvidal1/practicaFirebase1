import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuario.service';

describe('ProductoService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
