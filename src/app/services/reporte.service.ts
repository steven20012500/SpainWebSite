import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cuestionario } from '../class/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'http://localhost:3000/api/verCuestionarios';

  constructor(private http: HttpClient) {}

  obtenerCuestionarios(): Observable<Cuestionario[]> {
    return this.http.get<Cuestionario[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data', error);
    return throwError('Error fetching data; please try again later.');
  }
}
