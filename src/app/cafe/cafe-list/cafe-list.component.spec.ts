import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CafeService } from '../cafe.service';
import { CafeListComponent } from './cafe-list.component';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [{ provide: CafeService, useValue: { getCafes: () => of([]) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
