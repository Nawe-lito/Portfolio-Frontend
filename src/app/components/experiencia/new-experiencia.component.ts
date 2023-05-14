import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreExp: string = '';
  descripcionExp: string = '';
  trabajoExp: string = '';
  tiempoExp: string = '';
  imgExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { 

  }

  ngOnInit(): void { 

  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreExp, this.trabajoExp, this.descripcionExp, this.tiempoExp, this.imgExp);
    this.sExperiencia.save(expe).subscribe(
      data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, erro =>{
        alert("falló");
        this.router.navigate([''])
      }
      )
  }
}
