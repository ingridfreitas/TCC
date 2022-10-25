import { Component, OnInit } from '@angular/core';
import { Universidades } from '../core/model';
import { GradueiService } from '../services/graduei.service';

@Component({
  selector: 'app-instituicoes',
  templateUrl: './instituicoes.component.html',
  styleUrls: ['./instituicoes.component.css']
})
export class InstituicoesComponent implements OnInit {

  unis: Universidades[] = [];

  constructor(private gradueiService: GradueiService) {
   }

  ngOnInit(): void {
    this.gradueiService.listarUnis().subscribe(uniRet => {
      this.unis = uniRet
    });
  }

}
