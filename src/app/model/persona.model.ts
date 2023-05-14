export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    sobremi: string;
    img: string;

    constructor(nombre: string, apellido: string, sobremi: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sobremi = sobremi;
        this.img = img;
    }
}