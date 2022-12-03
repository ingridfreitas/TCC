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

  //@Output() miami = "right"

  cursos: Cursos[] = [];
  estados: Estados[] = []
  cidades: Cidades[] = [];
  universidades: Universidades[] = [];
  est: string = 'Estado';
  cityEst: Cidades[] = [];
  cid: string = 'Cidade Central';

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
      this.cursos = cursosRet
    });

    this.gradueiService.listarEstados().subscribe(estRet => {
      this.estados = estRet
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
      this.cityEst = catRet
    })
  }

  formatLabel(value: number) {
    let inex = document.querySelector(".inexistente");
    let resu = document.querySelector(".unis")

    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    else {
      var lat1 = -22.5870608;
      var lon1 = -48.7894605;

      let distancias = [
        {
          universidade: "Unesp: Botucatu",
          lat2: "-22.8914667",
          lon2: "-48.4985389",
        },
        {
          universidade: "Unesp: Bauru",
          lat2: "-22.3431576",
          lon2: "-49.0599622"

        },
      ];
      for (let i = 0; i < distancias.length; i++) {
        var lat2: any = distancias[i].lat2;
        var latU = lat2;
        var lon2: any = distancias[i].lon2;
        var lonU = lon2;

        const rad = function (x: any) {
          return (x * Math.PI) / 180;
        };

        var R = 6378.137;
        var dLat = rad(latU - lat1);
        var dLong = rad(lonU - lon1);
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(lat1)) *
          Math.cos(rad(lat2)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        const sla = [
          {
            nome: distancias[i].universidade,
            distancia: d
          }
        ]

        if (value >= d) {
          let valores = sla.find((dist) => dist.nome)?.nome

          resu?.classList.remove("drax")
          inex?.classList.add("drax")

          this.lugar = valores;
        }
        else {
          resu?.classList.add("drax")
          inex?.classList.remove("drax")
        }
      };
      return value;
    }
  }
  opened = false

  abrir() {
    this.opened = !this.opened;
  }

}