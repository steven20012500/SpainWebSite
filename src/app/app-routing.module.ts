import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: 'menu', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'informacion', component: InformacionComponent},
  { path: 'reporte', component: ReporteComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirige al informacion por defecto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
