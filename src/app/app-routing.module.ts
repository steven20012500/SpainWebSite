import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cuestionario', component: CuestionarioComponent },
  { path: 'menu', component: HomeComponent},
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirige al informacion por defecto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
