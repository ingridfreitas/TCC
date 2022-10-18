import { Component, OnInit } from '@angular/core';
import { Cursos } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];
  
  constructor(private cursoService: GradueiService) {
    
   }

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(cursosRet => {
      this.cursos = cursosRet
    })
  }

  //toDisplay = false;

  /*abrirInfo() {
    var flecha = document.querySelector('.gr');
    if (this.toDisplay = !this.toDisplay) {
      flecha?.classList.add('flecha')
    }
    else {
      flecha?.classList.remove('flecha')
      flecha?.classList.add('sflecha')

    }
  }*/

}
