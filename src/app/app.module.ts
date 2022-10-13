import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { LoginComponent } from './modals/login/login.component';
import { MeuComponent } from './meu/meu.component';
import { ImgCirculoComponent } from './img-circulo/img-circulo.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FooterComponent } from './footer/footer.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { NavbardashComponent } from '../carpetadash/navbardash/navbardash.component';
import { ButtonhomeComponent } from '../buttons/buttonhome/buttonhome.component';
import { ButtonloginComponent } from '../buttons/buttonlogin/buttonlogin.component';
import { HeaderdashComponent } from '../carpetadash/headerdash/headerdash.component';
import { BotoneditComponent } from '../buttons/botonedit/botonedit.component';
import { SobremidashComponent } from '../carpetadash/sobremidash/sobremidash.component';
import { Butonedit2Component } from '../buttons/butonedit2/butonedit2.component';
import { ExperienciadashComponent } from '../carpetadash/experienciadash/experienciadash.component';
import { HabilidadesdashComponent } from '../carpetadash/habilidadesdash/habilidadesdash.component';
import { EstudiosdashComponent } from '../carpetadash/estudiosdash/estudiosdash.component';
import { ProyectosdashComponent } from '../carpetadash/proyectosdash/proyectosdash.component';
import { HaderdashComponent } from './modals/haderdash/haderdash.component';
import { SobremimodalComponent } from './modals/sobremimodal/sobremimodal.component';
import { ExperienciamodalComponent } from './modals/experienciamodal/experienciamodal.component';
import { HabilidadmodalComponent } from './modals/habilidadmodal/habilidadmodal.component';
import { EstudiosmodalComponent } from './modals/estudiosmodal/estudiosmodal.component';
import { ProyectosmodalComponent } from './modals/proyectosmodal/proyectosmodal.component';
import { ImgcirculodashComponent } from '../carpetadash/imgcirculodash/imgcirculodash.component';
import { LogoargComponent } from './logoarg/logoarg.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { TextoperfilComponent } from './textoperfil/textoperfil.component';
import { ComponentproyectoComponent } from './componentproyecto/componentproyecto.component';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SobreMiComponent,
    LoginComponent,
    MeuComponent,
    ImgCirculoComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    EstudiosComponent,
    ProyectosComponent,
    ComentariosComponent,
    FooterComponent,
    RedesComponent,
    DashboardComponent,
    InicioComponent,
    ErrorComponent,
    NavbardashComponent,
    ButtonhomeComponent,
    ButtonloginComponent,
    HeaderdashComponent,
    BotoneditComponent,
    SobremidashComponent,
    Butonedit2Component,
    ExperienciadashComponent,
    HabilidadesdashComponent,
    EstudiosdashComponent,
    ProyectosdashComponent,
    HaderdashComponent,
    SobremimodalComponent,
    ExperienciamodalComponent,
    HabilidadmodalComponent,
    EstudiosmodalComponent,
    ProyectosmodalComponent,
    ImgcirculodashComponent,
    LogoargComponent,
    HamburgerComponent,
    TextoperfilComponent,
    ComponentproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
