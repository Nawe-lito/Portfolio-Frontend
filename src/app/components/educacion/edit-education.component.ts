import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageeducacionService } from 'src/app/service/imageeducacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  educacion: Educacion = null;

  constructor (private educacionS:EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router){
      
    }
    
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educacionS.detail(id)
      .subscribe(
        {
          next: data =>{
            this.educacion = data;
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
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err  => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
