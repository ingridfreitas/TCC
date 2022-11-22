import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidades, Cursos, Estados, Polos, PolosCursos, Universidades } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class GradueiService {

  private readonly CURSOS = 'http://localhost:8080/cursos/todos'
  private readonly EST = 'http://localhost:8080/estados/todos'
  private readonly CITY = 'http://localhost:8080/cidades/todos'
  private readonly POL = 'http://localhost:8080/polos/todos'
  private readonly UNI = 'http://localhost:8080/universidades/todos'
  private readonly UniCat = 'http://localhost:8080/universidades/categoria'
  private readonly CidEst = 'http://localhost:8080/cidades/estados'
  private readonly POLO = 'http://localhost:8080/polos/universidades'
  private readonly PoCi = 'http://localhost:8080/polos/cidades'
  private readonly Prin = 'http://localhost:8080/polosCursos/cursos'
  private readonly PC = 'http://localhost:8080/polosCursos/polos'




  constructor(private http: HttpClient) { }

  listarCursos() {
    return this.http.get<Cursos[]>(this.CURSOS);
  }

  listarEstados(){
    return this.http.get<Estados[]>(this.EST);
  }

  listarPolos(){
    return this.http.get<Polos[]>(this.POL);
  }

  listarCidades(){
    return this.http.get<Cidades[]>(this.CITY);
  }

  listarUnis(){
    return this.http.get<Universidades[]>(this.UNI);
  }

  buscarCategoria(categoria: string){
    return this.http.get<Universidades[]>(`${this.UniCat}?categoria=${categoria}`)
  }

  buscarEstado(nome_estado: string){
    return this.http.get<Cidades[]>(`${this.CidEst}?nome_estado=${nome_estado}`)
  }

  buscarPoloCat(categoria: string){
    return this.http.get<Polos[]>(`${this.POLO}?categoria=${categoria}`)
  }

  buscarPoloCity(nome_cidade: string){
    return this.http.get<Polos[]>(`${this.PoCi}?nome_cidade=${nome_cidade}`)
  }

  buscar(nome_curso: string){
    return this.http.get<PolosCursos[]>(`${this.Prin}?nome_curso=${nome_curso}`)
  }

  buscarpc(nome_polo: string){
    return this.http.get<PolosCursos[]>(`${this.PC}?nome_polo=${nome_polo}`)
  }
  
}
