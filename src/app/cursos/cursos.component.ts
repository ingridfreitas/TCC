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
      this.cursos = cursosRet
      console.log(this.cursos)
    });
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
