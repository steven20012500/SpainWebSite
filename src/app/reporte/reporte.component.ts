import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../services/reporte.service';
import { Cuestionario } from '../class/cuestionario';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit{
  cuestionarios: Cuestionario[] = [];
  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {

    this.reporteService.obtenerCuestionarios().subscribe(
      (data: Cuestionario[]) => {
        this.cuestionarios = data;
      },
      error => {
        console.error('Error al obtener los cuestionarios', error);
      }
    );
  }

}
