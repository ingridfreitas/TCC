import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './cursos/cursos.component';
import { FooterComponent } from './footer/footer.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';
import { TestesComponent } from './testes/testes.component';
import { AboutComponent } from './about/about.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { AdminComponent } from './admin/admin.component';
import { ResultadosComponent } from './home/resultados/resultados.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CursosComponent,
    FooterComponent,
    InstituicoesComponent,
    TestesComponent,
    AboutComponent,
    ResultadosComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
