import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RedesComponent } from './components/redes/redes.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    PortadaComponent,
    SobremiComponent,
    EducacionComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
