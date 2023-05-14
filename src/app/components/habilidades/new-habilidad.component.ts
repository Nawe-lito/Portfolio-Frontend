import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesModel } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreHab: string;
  porcentajeSkill: number;

  constructor(private habilidadesS: HabilidadesService,
    private activatedRouterHab: ActivatedRoute,
    private router: Router,){

    }

    ngOnInit():void{

    }

    onCreate(): void {
      const habilidades = new HabilidadesModel(this.nombreHab, this.porcentajeSkill);
      this.habilidadesS.save(habilidades).subscribe(
        data =>{
          alert("Habilidad agregada correctamente");
          this.router.navigate(['']);
        }, erro => {
          alert("No se pudo agregar correctamente");
          this.router.navigate(['']);
        }
      ) 
    }
}
 