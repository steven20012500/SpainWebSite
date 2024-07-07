import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuestionario } from '../class/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  private apiUrl = 'http://localhost:3000/api/addCuestionario';
  constructor(private http: HttpClient) { }

  agregarCuestionario(cuestionario: any) {
    return this.http.post(this.apiUrl, cuestionario);
  }
}
