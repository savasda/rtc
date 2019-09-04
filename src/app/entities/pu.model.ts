import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class PuModel {
    id: number;
    name: string;
    punktName: string;
    value: string;
    isPu: boolean;
    quantity?: string;
    constructor(name: string, isPu: boolean =false, hasPunkt: boolean = false) {
        this.name = name;
        this.id = this.randomInteger(1, 999999);
        if(hasPunkt) this.punktName = null;
        this.value = null;
        this.isPu = isPu;
    }

    private randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}
