import { Component, OnInit } from '@angular/core';
import { Cidades, Cursos, Estados, Universidades, Polos, PolosCursos, Resultado } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  cursos: Cursos[] = [];
  estados: Estados[] = []
  cidades: Cidades[] = [];
  polos: Polos[] = []
  nemo: Polos[] = []
  universidades: Universidades[] = [];
  pocur: PolosCursos[] = [];

  cur: string = 'Curso'
  vf: string = 'Categoria';
  est: string = 'Estado';
  //cid: string = 'Cidade Central';

  cityEst: Cidades[] = [];
  //city: Cidades[] = [];

  nome_curso: string | undefined;
  nome_polo: string | undefined;

  res: Resultado[] = [];
  distancia: [] = []

  lugar: string | undefined;

  constructor(private gradueiService: GradueiService) { }

  ngOnInit(): void {
    this.gradueiService.listarCursos().subscribe(cursosRet => {
      this.cursos = cursosRet
    });

    this.gradueiService.listarEstados().subscribe(estRet => {
      this.estados = estRet
    });

    this.gradueiService.listarPolos().subscribe(catRet => {
      this.nemo = catRet
    })
  }

  enviar() {

    if (this.est != 'Estado') {
      this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
        this.cityEst = catRet
      })

      if (this.cur != 'Curso') {
        this.gradueiService.buscar(this.cur).subscribe(catRet => {
          this.pocur = catRet
          console.log(this.pocur)

          for (let i = 0; this.pocur.length > (i + 1); i++) {
            this.pocur[i].cursos.nome_curso
            this.pocur[i].polos.nome_polo
            this.pocur[i].polos.cidades.nome_cidade
            this.pocur[i].polos.universidades.categoria
          }
        })
      }

      /*if (this.cid != 'Cidade Central') {
        this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
          var ville = catRet.filter((obj) => {
            return obj.nome_cidade === this.cid;
          });
          this.city = ville
          this.gradueiService.buscarPoloCity(this.cid).subscribe(catRet => {
            this.polos = catRet
            console.log(this.polos)

            
          })
        })

      }*/
    }


    if (this.vf != 'Categoria') {
      this.gradueiService.buscarCategoria(this.vf).subscribe(catRet => {
        this.universidades = catRet
        console.log(catRet)
      })

      if (this.vf == 'ambas') {
        this.gradueiService.listarUnis().subscribe(catRet => {
          this.universidades = catRet
          console.log(catRet)
        })
      }
    }
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
          console.log(valores)

          this.lugar = valores;
        }
        else {
          resu?.classList.add("drax")
          inex?.classList.remove("drax")
        }
      };
    }
    return value;
  }

}
