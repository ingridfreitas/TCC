import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cursos } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];

  
  constructor(private gradueiService: GradueiService) {
   }

  ngOnInit(): void {
    this.gradueiService.listarCursos().subscribe(cursosRet => {
      this.cursos = cursosRet.sort(function(a, b){
        if (a.nome_curso > b.nome_curso) {
          return 1;
        }
        if (a.nome_curso < b.nome_curso) {
          return -1;
        }
        return 0;
      })
      console.log(this.cursos)
    });
  }

}
