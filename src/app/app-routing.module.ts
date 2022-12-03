import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ResultadosComponent } from './home/resultados/resultados.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';
import { TestesComponent } from './testes/testes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'inst', component: InstituicoesComponent},
  {path: 'testes', component: TestesComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'resultados/:otrr/:kit/:florida/:miami', component: ResultadosComponent},
  {path: 'resultado/:curhd/:ds', component: ResultadosComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
