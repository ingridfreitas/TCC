import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private rout: Router) { }

  user: string = ''
  senha: string = ''

  private usuario: string = 'graduei admin'
  private pass: string = 'gradueietec'

  alerts: any[] = [];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  entrar() {
    if ((this.usuario == this.user) && (this.senha == this.pass)) {
      console.log("ok")
      this.rout.navigateByUrl('/admin')
      this.modalRef?.hide()
    }
    else {
      console.log("erro")
      this.user = ''
      this.senha = ''
      this.alerts.push({
        type: 'danger',
        msg: `ERRO! Usuário ou senha incorretos`,
        timeout: 5000
      });

      console.log(this.user)
      console.log(this.usuario)
      console.log(this.pass)
      console.log(this.senha)
    }
  }

  canc() {
    this.modalRef?.hide()
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
