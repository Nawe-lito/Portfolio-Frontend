export class Experiencia {
    id?: number;
    nombreExp: string;
    trabajoExp: string;
    descripcionExp: string;
    tiempoExp: string;
    imgExp: string;

    constructor(nombreExp: string, trabajoExp: string, descrpcionExp: string, tiempoExp: string, imgExp: string){
        this.nombreExp = nombreExp;
        this.trabajoExp = trabajoExp;
        this.descripcionExp = descrpcionExp;
        this.tiempoExp = tiempoExp;
        this.imgExp = imgExp;
    }
}
