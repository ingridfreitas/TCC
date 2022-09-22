import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDisplay = false;

  abrirInfo() {
    var flecha = document.querySelector('.gr');
    if (this.toDisplay = !this.toDisplay) {
      flecha?.classList.add('flecha')
    }
    else {
      flecha?.classList.remove('flecha')
      flecha?.classList.add('sflecha')

    }
  }

}
