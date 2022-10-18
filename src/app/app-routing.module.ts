import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';
import { MapsComponent } from './maps/maps.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TestesComponent } from './testes/testes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'inst', component: InstituicoesComponent},
  {path: 'testes', component: TestesComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'resultado', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
