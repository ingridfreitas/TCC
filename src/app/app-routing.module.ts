import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'inst', component: InstituicoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
