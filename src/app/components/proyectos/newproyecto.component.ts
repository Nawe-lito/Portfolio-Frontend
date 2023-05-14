import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosModel } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
nombrePro: string;
descripcionPro: string;
anioPro: number;
imagenPro: string;
urlPro: string;

constructor(private proyectosS: ProyectosService,
  private activatedRouter: ActivatedRoute,
  private router: Router,){

  }

  ngOnInit():void{

  }

  onCreate(): void {
    const proyectos = new ProyectosModel(this.nombrePro, this.descripcionPro, this.anioPro, this.imagenPro, this.urlPro);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto agregado correctamente");
        this.router.navigate(['']);
      }, erro => {
        alert("No se pudo agregar correctamente");
        this.router.navigate(['']);
      }
    ) 
  }
}