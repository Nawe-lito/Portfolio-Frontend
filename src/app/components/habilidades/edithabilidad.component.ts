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

  constructor(private sHabilidades: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.detail(id)
    .subscribe(
      {
        next: data =>{
          this.habilidades = data;
      }, 
      error: err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.update(id, this.habilidades)
    .subscribe(
      {
        next: data =>{
          this.router.navigate(['']);
      }, 
      error: err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
      }
    )
  }

}