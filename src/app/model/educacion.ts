export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imgE: string;
    tiempoE: string;

    constructor(nombreE: string, descripcionE: string, imgE: string, tiempoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.tiempoE = tiempoE;
    }
}
