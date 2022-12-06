import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cidades, Cursos, Estados, Universidades } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: number = 15;
  options: Options = {
    floor: 0,
    ceil: 200,
  };

  cursos: Cursos[] = [];
  estados: Estados[] = []
  cidades: Cidades[] = [];
  universidades: Universidades[] = [];
  est: string = 'Estado';
  cityEst: Cidades[] = [];
  cid: string = 'Cidade Central';
  cur: string = 'Curso';

  aparece: boolean = false;
  dados: any = []
  lugar: string | undefined;

  buscas() {
    var mapa = document.querySelector(".mapa");
    mapa?.classList.add("nada");
  }

  constructor(private gradueiService: GradueiService, private router: Router) {

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
        // a must be equal to b
        return 0;
      })
    });

    this.gradueiService.listarEstados().subscribe(estRet => {
      this.estados = estRet.sort(function(a, b){
        if (a.nome_estado > b.nome_estado) {
          return 1;
        }
        if (a.nome_estado < b.nome_estado) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    });

    this.gradueiService.listarCidades().subscribe(estCity => {
      this.cidades = estCity
    });

    this.gradueiService.listarUnis().subscribe(unisRet => {
      this.universidades = unisRet
    });

    this.gradueiService.buscarEstado(this.est).subscribe(catRet =>{
      this.cityEst = catRet
      console.log(catRet)
    })
  }

  aparecer() {
    this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
      this.cityEst = catRet.sort(function(a, b){
        if (a.nome_cidade > b.nome_cidade) {
          return 1;
        }
        if (a.nome_cidade < b.nome_cidade) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    })
  }
  opened = false

  abrir() {
    this.opened = !this.opened;
  }

  aa(){
    console.log(this.value)
  }

}