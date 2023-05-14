export class HabilidadesModel {
    id?: number;
    nombreHab: string;
    porcentajeSkill: number;

    constructor(nombreHab: string, porcentajeSkill: number){
        this.nombreHab = nombreHab;
        this.porcentajeSkill = porcentajeSkill;
    }
}
