import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuestionario } from '../class/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  private apiUrl = 'https://localhost:3000/api/verCuestionarios'; 
  private apiUrl2 = 'http://localhost:3000/api/addCuestionario';
  constructor(private http: HttpClient) { }
  obtenerCuestionarios(): Observable<any>{
    return this.http.get<Cuestionario[]>(this.apiUrl);
  }

  agregarCuestionario(cuestionario: any) {
    return this.http.post(this.apiUrl2, cuestionario);
  }
}
