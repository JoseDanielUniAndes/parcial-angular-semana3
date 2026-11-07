import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { CafeListComponent } from './cafe-list.component';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let compiled: HTMLElement;

  const cafes = [
    new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela', 1920, 'a.jpg'),
    new Cafe(2, 'Café Especial Navegante', 'Café de Origen', 'Guatapé, Antioquia', 'Cítrico', 1800, 'b.jpg'),
    new Cafe(3, 'Café Especial Valentina', 'Café de Origen', 'Fredonia, Antioquia', 'Cacao', 1750, 'c.jpg')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [{ provide: CafeService, useValue: { getCafes: () => of(cafes) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('la tabla tiene el encabezado y una fila por cada café (3)', () => {
    expect(compiled.querySelectorAll('thead tr').length).toBe(1);
    expect(compiled.querySelectorAll('tbody tr').length).toBe(3);
    expect(compiled.querySelectorAll('tr').length).toBe(4);
  });

  it('cada fila muestra nombre, tipo y región del café', () => {
    const celdas = compiled.querySelectorAll('tbody tr')[1].querySelectorAll('th, td');

    expect(celdas[0].textContent).toContain('2');
    expect(celdas[1].textContent).toContain('Café Especial Navegante');
    expect(celdas[2].textContent).toContain('Café de Origen');
    expect(celdas[3].textContent).toContain('Guatapé, Antioquia');
  });

  it('calcula y muestra el total de cafés de origen y de blend', () => {
    const parrafos = compiled.querySelectorAll('p');

    expect(parrafos[0].textContent).toContain('Total café de origen: 2');
    expect(parrafos[1].textContent).toContain('Total café blend: 1');
  });
});
