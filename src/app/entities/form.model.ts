export enum FieldFormsTypes {
    punktUpravleniya,
    defaultField
}

export class FormFieldModel {
    id: number;
    name: string;
    value: string | number;
    children: Array<FormFieldModel>;
    type: FieldFormsTypes;
    hasControls: boolean;

    addChild(model: FormFieldModel) {
        this.children.push(model)
    }

    removeChild(model: FormFieldModel) {
        const index = this.children.findIndex(el => el.id === model.id);
        if(index !== -1) this.children.splice(index, 1);
        else throw new Error(`Элемент с id ${model.id} не найден`);
    }

    setValue(value: string | number) {
        this.value = +value;
    }

    constructor(name: string, type: FieldFormsTypes = FieldFormsTypes.defaultField) {
        this.id = this.randomInteger(1, 9999999999999999);
        this.type = type;
        this.name = name;
    }

    itemHasControls() {
        this.hasControls = true;
    }

    private randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}
