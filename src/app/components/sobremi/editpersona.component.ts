import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit{
  persona: persona = null;
  
  constructor(private activatedRouter: ActivatedRoute,
    private personaservice: PersonaService,
    private router: Router,) {
  
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaservice.detail(id).subscribe(
     data =>{
       this.persona = data
     }, err => {
       alert("Error al modificar");
       this.router.navigate(['']);
     }
    ) 
 }

 onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaservice.update(id, this.persona).subscribe(
    data => {
      this.router.navigate(['']);
    }, err  => {
      alert("Error al modificar la persona");
      this.router.navigate(['']);
    }
  )
}

//   uploadImage($event:any) {
//     const id = this.activatedRouter.snapshot.params['id'];
//     const name = "perfil_" + id;
//     this.imageService.uploadImage($event, name);
//   }

}
