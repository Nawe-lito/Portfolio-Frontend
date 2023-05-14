import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducactionComponent } from './components/educacion/neweducaction.component';
import { EditEducationComponent } from './components/educacion/edit-education.component';
import { EditpersonaComponent } from './components/sobremi/editpersona.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducactionComponent},
  {path: 'editedu/:id', component: EditEducationComponent},
  {path: 'editpersona/:id', component: EditpersonaComponent},
  {path: 'nuevahab', component: NewHabilidadComponent},
  {path: 'edithabilidad/:id', component: EdithabilidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
