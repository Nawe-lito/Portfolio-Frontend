import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducaction',
  templateUrl: './neweducaction.component.html',
  styleUrls: ['./neweducaction.component.css']
})
export class NeweducactionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;

  constructor (private educacionS:EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService){
      
    }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.imgE = this.imageService.url;
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

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name);
  }
}
