import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cidades, Cursos, Estados, Universidades, Polos, PolosCursos } from '../../core/model'
import { GradueiService } from '../../services/graduei.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  //@Input() miami = '';

  miami: string = '';
  otrr: string = '';
  florida: string = ''
  kit: string = ''
  otrrhd: string = ''

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 200,
  };

  d: number = 0;

  cursos: Cursos[] = [];
  estados: Estados[] = []
  polos: Polos[] = []
  universidades: Universidades[] = [];
  pocur: PolosCursos[] = [];
  cityEst: Cidades[] = [];
  city: Cidades[] = [];
  res: PolosCursos[] = [];
  pol: PolosCursos[] = []
  pocurd: PolosCursos[] = []
  fimd: PolosCursos[] = []


  cur: string = 'Curso'
  curd: string = 'Curso'
  vf: string = 'Categoria';
  est: string = 'Estado';
  cid: string = 'Cidade Central';

  valores: PolosCursos[] = []

  constructor(private gradueiService: GradueiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gradueiService.listarCursos().subscribe(cursosRet => {
      this.cursos = cursosRet
    });

    this.gradueiService.listarEstados().subscribe(estRet => {
      this.estados = estRet
    });

    this.gradueiService.listarPolos().subscribe(catRet => {
      this.polos = catRet
    })

    this.route.params.subscribe((rt: any) => {
      this.otrr = rt.otrr
      this.kit = rt.kit
      this.florida = rt.florida
      this.miami = rt.miami
      this.otrrhd = rt.curhd
      this.value = rt.ds

      this.cur = this.otrr
      this.vf = this.kit
      this.est = this.florida
      this.cid = this.miami
      this.curd = this.otrrhd

      if (this.florida != 'Estado') {
        console.log("sim")
        this.enviar()
      }

      /*if (this.florida != 'Estado') {
        this.gradueiService.buscarEstado(this.florida).subscribe(catRet => {
          this.cityEst = catRet
        })

        if (this.otrr != 'Curso') {
          this.gradueiService.buscar(this.otrr).subscribe(catRet => {
            this.pocur = catRet
          })
        }

        if (this.miami != 'Cidade Central') {
          this.gradueiService.buscarEstado(this.florida).subscribe(catRet => {
            var ville = catRet.filter((obj) => {
              return obj.nome_cidade === this.miami;
            });
            this.city = ville
            this.gradueiService.buscarPoloCity(this.miami).subscribe(catRet => {
              this.polos = catRet

              this.pol = this.pocur.filter((city) => {
                return city.polos.cidades.nome_cidade === this.miami;
              });
              if (this.kit != 'Categoria') {
                if (this.kit == 'Ambas') {
                  this.res = this.pol
                }
                else this.gradueiService.buscarCategoria(this.kit).subscribe(catRet => {
                  this.universidades = catRet
    
                  this.res = this.pol.filter((uni) => {
                    uni.polos.universidades.categoria === this.kit
                  })
                })
              }
            })
          })
          
        }
      }*/

      if(this.curd != 'Curso'){
        console.log("sim")
        this.sla()
      }

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
        })
      }

      if (this.cid != 'Cidade Central') {
        this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
          var ville = catRet.filter((obj) => {
            return obj.nome_cidade === this.cid;
          });
          this.city = ville
          this.gradueiService.buscarPoloCity(this.cid).subscribe(catRet => {
            this.polos = catRet

            this.pol = this.pocur.filter((city) => {
              return city.polos.cidades.nome_cidade === this.cid;
            });
            if (this.vf != 'Categoria') {
              if (this.vf == 'Ambas') {
                this.res = this.pol
              }
              else this.gradueiService.buscarCategoria(this.vf).subscribe(catRet => {
                this.universidades = catRet
      
                this.res = this.pol.filter((uni) => {
                  return uni.polos.universidades.categoria === this.vf
                })
              })
            }
          })
        })
      }
    }
  }

  aparecer() {
    this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
      this.cityEst = catRet
    })
  }

  sla() {
    this.gradueiService.buscar(this.curd).subscribe(ret => {
      this.pocurd = ret

      var lat1 = -22.5870608;
      var lon1 = -48.7894605;

      let distancias = this.pocurd

      for (let i = 0; i < distancias.length; i++) {

        var lat2: any = distancias[i].polos.latitude;
        var latU = lat2;
        var lon2: any = distancias[i].polos.longitude;
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
        this.d = R * c;

        if (this.value >= this.d) {
          this.fimd[i] = distancias[i]
          this.valores = this.fimd.filter(aa => {
            return aa.cursos.nome_curso == this.curd
          })
        }
      }
    })
  }
}