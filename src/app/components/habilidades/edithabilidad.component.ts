import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { HabilidadesModel } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {
 habilidades: HabilidadesModel = null;

 constructor (private habilidadesS:HabilidadesService, 
  private activatedRouter: ActivatedRoute, 
  private router: Router,){
    
  }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesS.detail(id)
    .subscribe(
      {
        next: data =>{
          this.habilidades = data;
      }, 
      error: err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
      }
    )
  }

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.habilidadesS.update(id, this.habilidades).subscribe(
    data => {
      this.router.navigate(['']);
    }, err  => {
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    }
  )
}
}
