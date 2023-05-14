import { Component } from '@angular/core';
import { ProyectosModel } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: ProyectosModel[] = [];

constructor(private proyectosS: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectosS.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data =>{
          alert("proyecto eliminado correctamente")
          this.cargarProyecto();
        }, error =>{
          alert("no se pudo eliminar el proyecto")
        })
    }}
}

