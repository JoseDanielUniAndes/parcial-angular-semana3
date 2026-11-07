import { Component, OnInit } from '@angular/core';

import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  standalone: false,
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];
  totalOrigen = 0;
  totalBlend = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
      this.totalOrigen = this.contarPorTipo('Café de Origen');
      this.totalBlend = this.contarPorTipo('Blend');
    });
  }

  private contarPorTipo(tipo: string): number {
    return this.cafes.filter(cafe => cafe.tipo === tipo).length;
  }
}
