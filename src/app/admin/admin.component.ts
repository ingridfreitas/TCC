import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { Cidades, Cursos, Estados, Polos, PolosCursos, Universidades } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //ngPolo
  napo: string = ''
  sigla: string = ''
  lat: string = ''
  lon: string = ''

  //ngPoloCurso
  pou: string = 'Polo'
  mec: string = ''
  lin: string = ''
  cs: string = 'Curso'

  est: string = 'Estado';
  u: string = 'Universidade'
  vf: string = 'Categoria';
  cid: string = 'Cidade Central';

  estp: Estados = { nome_estado: this.est }
  amora: Universidades = { id: 0, nome_universidade: '', sigla: '', categoria: '', img: '', link: '' }
  pCity: Cidades = { id: 0, nome_cidade: '', estados: this.estp }
  oCity: Cidades = { id: 0, nome_cidade: '', estados: this.estp }
  opolo: Polos = { id: 0, nome_polo: '', universidades: this.amora, latitude: '', longitude: '', cidades: this.pCity }
  ocur: Cursos = { id: 0, duracao: '', descricao: '', nome_curso: '', img: '' }
  pcur: PolosCursos = { id: 0, nota: '', link: '', cursos: this.ocur, polos: this.opolo }

  cityEst: Cidades[] = [];
  cursos: Cursos[] = []
  apcursos: PolosCursos[] = []
  dcursos: PolosCursos[] = []
  estados: Estados[] = []
  cidades: Cidades[] = [];
  polos: Polos[] = []
  dpolos: Polos[] = []
  rCity: Cidades[] = []
  unis: Universidades[] = []
  pocur: PolosCursos[] = []



  constructor(private gradueiService: GradueiService, private http: HttpClient) { }

  ngOnInit(): void {
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
      this.cidades = estCity.sort(function(a, b){
        if (a.nome_cidade > b.nome_cidade) {
          return 1;
        }
        if (a.nome_cidade < b.nome_cidade) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    });

    this.gradueiService.listarPolos().subscribe(ret => {
      this.polos = ret.sort(function(a, b){
        if (a.nome_polo > b.nome_polo) {
          return 1;
        }
        if (a.nome_polo < b.nome_polo) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    })

    this.gradueiService.listarCursos().subscribe(ret => {
      this.cursos = ret.sort(function(a, b){
        if (a.nome_curso > b.nome_curso) {
          return 1;
        }
        if (a.nome_curso < b.nome_curso) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    })

    this.gradueiService.listarUnis().subscribe(ret => {
      this.unis = ret.sort(function(a, b){
        if (a.nome_universidade > b.nome_universidade) {
          return 1;
        }
        if (a.nome_universidade < b.nome_universidade) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    })

    this.gradueiService.listarPolosCursos().subscribe(ret => {
      this.pocur = ret})
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

  inserirCurso(curso: { duracao: string, descricao: string, nome_curso: string, img: string }) {
    console.log(curso)
    this.gradueiService.criarCurso(curso).subscribe(ret => {
      console.log(ret)
    })

    location.reload()
  }

  inserirUni(universidade: { nome_universidade: string, sigla: string, categoria: string, img: string, link: string }) {
    console.log(universidade)
    this.gradueiService.criarUni(universidade).subscribe(ret => {
      console.log(ret)
    })
    location.reload()
  }

  ip() {
    for (let i = 0; this.unis.length > i; i++) {
      if (this.unis[i].nome_universidade == this.u) {
        this.amora = {
          id: this.unis[i].id,
          nome_universidade: this.unis[i].nome_universidade,
          sigla: this.unis[i].sigla,
          categoria: this.unis[i].categoria,
          img: this.unis[i].img,
          link: this.unis[i].link
        }
      }
    }
    if (this.cid != 'Cidade Central') {
      this.gradueiService.buscarEstado(this.est).subscribe(catRet => {
        var ville = catRet.filter((obj) => {
          return obj.nome_cidade === this.cid;
        });
        this.rCity = ville

        for (let i = 0; this.rCity.length > i; i++) {
          this.pCity = {
            id: this.rCity[i].id,
            nome_cidade: this.rCity[i].nome_cidade,
            estados: this.estp
          }
        }
        var postPolo: Polos =
        {
          nome_polo: this.napo,
          universidades: this.amora,
          latitude: this.lat,
          longitude: this.lon,
          cidades: this.pCity
        }

        console.log(postPolo)
        this.gradueiService.criarPolo(postPolo).subscribe(ret => {
          console.log(ret)
        })
      })
    }
    location.reload()
  }

  ipc() {
    for (let i = 0; this.cursos.length > i; i++) {
      if (this.cursos[i].nome_curso == this.cs) {
        this.ocur = {
          id: this.cursos[i].id,
          duracao: this.cursos[i].duracao,
          descricao: this.cursos[i].descricao,
          nome_curso: this.cursos[i].nome_curso,
          img: this.cursos[i].img
        }
      }
    }

    for (let i = 0; this.polos.length > i; i++) {
      if (this.polos[i].nome_polo == this.pou) {

        this.amora = {
          id: this.polos[i].universidades.id,
          nome_universidade: this.polos[i].universidades.nome_universidade,
          sigla: this.polos[i].universidades.sigla,
          categoria: this.polos[i].universidades.categoria,
          img: this.polos[i].universidades.img,
          link: this.polos[i].universidades.link
        }

        var mano = this.polos[i].cidades
        console.log(mano)

        var postPolo: Polos =
        {
          id: this.polos[i].id,
          nome_polo: this.polos[i].nome_polo,
          universidades: this.amora,
          latitude: this.polos[i].latitude,
          longitude: this.polos[i].longitude,
          cidades: mano
        }
        this.pcur = {
          nota: this.mec,
          link: this.lin,
          cursos: this.ocur,
          polos: postPolo
        }
      }
    }

    console.log(this.ocur)

    console.log(this.pcur)

    this.gradueiService.criarPoCur(this.pcur).subscribe(ret => {
      console.log(ret)
    })
    location.reload()
  }

  deletar() {
    for (let i = 0; this.apcursos.length > i; i++) {
      if (this.apcursos[i].cursos.nome_curso == this.cs) {
        this.dcursos[i] = this.apcursos[i]
        var alvo = this.dcursos[i].id
      }
    }
    console.log(alvo)
    this.gradueiService.deletarPoloCurso(alvo).subscribe(() => console.log('Delete successful'));
    location.reload()
  }

  aparecerCur() {
    this.gradueiService.buscarpc(this.pou).subscribe(catRet => {
      this.apcursos = catRet
    })
  }
}