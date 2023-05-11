export class Experiencia {
    id?: number;
    nombreE: string;
    trabajoE: string;
    descripcionE: string;

    constructor(nombreE: string, trabajoE: string, descrpcionE: string){
        this.nombreE = nombreE;
        this.trabajoE = trabajoE;
        this.descripcionE = descrpcionE;
    }
}
