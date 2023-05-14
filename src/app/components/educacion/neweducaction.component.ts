import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageeducacionService } from 'src/app/service/imageeducacion.service';

@Component({
  selector: 'app-neweducaction',
  templateUrl: './neweducaction.component.html',
  styleUrls: ['./neweducaction.component.css']
})
export class NeweducactionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;
  tiempoE: string;

  constructor (private educacionS: EducacionService, 
    private activatedRouterE: ActivatedRoute, 
    private router: Router,
    public imageeducacionService: ImageeducacionService){
      
    }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.tiempoE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion agregada correctamente");
        this.router.navigate(['']);
      }, erro => {
        alert("No se pudo agregar correctamente");
        this.router.navigate(['']);
      }
    ) 
  }

  uploadImageE($event:any) {
    const id = this.activatedRouterE.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageeducacionService.uploadImageE($event, name);
  } 
}
