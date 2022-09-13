import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
