export class ProyectosModel {
    id?: number;
    nombrePro: string;
    descripcionPro: string;
    anioPro: number;
    imagenPro: string;
    urlPro: string

    constructor(nombrePro: string, descripcionPro: string, anioPro: number, imagenPro: string, urlPro: string){
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.anioPro = anioPro;
        this.imagenPro = imagenPro;
        this.urlPro = urlPro;
    }
}
 