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
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BotonloginComponent } from './components/botonlogin/botonlogin.component';
import { FormsModule } from '@angular/forms'
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducactionComponent } from './components/educacion/neweducaction.component';
import { EditEducationComponent } from './components/educacion/edit-education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditpersonaComponent } from './components/sobremi/editpersona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    PortadaComponent,
    SobremiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    BotonloginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducactionComponent,
    EditEducationComponent,
    EditpersonaComponent,
    NewHabilidadComponent,
    EdithabilidadComponent,
    NewproyectoComponent,
    EditproyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "outerStrokeColor": "#0d6efd",
      "outerStrokeWidth": 20,
      "innerStrokeColor": "#6c757d",
      "innerStrokeWidth": 20,
      "showSubtitle": false,
      "showUnits": false,
      "showBackground": false,
      "titleColor": "#f8f9fa",
      "titleFontSize": "28",
      "radius": 90,
      "space": -20,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
