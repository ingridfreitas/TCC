import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatUni, Cidades, Cursos, Estados, Universidades } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class GradueiService {

  private readonly CURSOS = 'http://localhost:8080/cursos/todos'
  private readonly EST = 'http://localhost:8080/estados/todos'
  private readonly CITY = 'http://localhost:8080/cidades/todos'
  private readonly UNI = 'http://localhost:8080/universidades/todos'
  private readonly UniCat = 'http://localhost:8080/universidades/categoria'


  constructor(private http: HttpClient) { }

  listarCursos() {
    return this.http.get<Cursos[]>(this.CURSOS);
  }

  listarEstados(){
    return this.http.get<Estados[]>(this.EST);
  }

  listarCidades(){
    return this.http.get<Cidades[]>(this.CITY);
  }

  listarUnis(){
    return this.http.get<Universidades[]>(this.UNI);
  }

  buscarCategoria(categoria: string){
    return this.http.get<CatUni[]>(`${this.UniCat}?categoria=${categoria}`)
  }
}
