import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosModel } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
proyecto: ProyectosModel = null;

  constructor(private activatedRouter: ActivatedRoute,
    private proyectoS : ProyectosService,
    private router: Router,) {
  
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
     data =>{
       this.proyecto = data
     }, err => {
       alert("Error al modificar");
       this.router.navigate(['']);
     }
    ) 
 }

 onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoS.update(id, this.proyecto).subscribe(
    data => {
      this.router.navigate(['']);
    }, err  => {
      alert("Error al modificar la persona");
      this.router.navigate(['']);
    }
  )
}
}
