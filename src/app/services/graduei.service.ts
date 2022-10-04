import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class GradueiService {

  private readonly API = '/assets/api.json'

  constructor(private http: HttpClient) { }

  listarCursos() {
    return this.http.get<Cursos[]>(this.API);
  }
}
