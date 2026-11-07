import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Cafe } from './cafe';
import { CAFES_URL, CafeService } from './cafe.service';

describe('CafeService', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCafes pide el listado por GET a la URL del enunciado', () => {
    const cafes = [
      new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela', 1920, 'a.jpg')
    ];

    service.getCafes().subscribe(respuesta => expect(respuesta).toEqual(cafes));

    const req = httpMock.expectOne(CAFES_URL);
    expect(req.request.method).toBe('GET');
    req.flush(cafes);
  });
});
