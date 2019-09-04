import { Component, OnInit } from '@angular/core';
import { PuModel } from '../../entities/pu.model';
import { FormFieldModel, FieldFormsTypes } from '../../entities/form.model';

@Component({
  selector: 'app-razvedka-postoyanno-vipolniaemae',
  templateUrl: './razvedka-postoyanno-vipolniaemae.component.html',
  styleUrls: ['./razvedka-postoyanno-vipolniaemae.component.less']
})
export class RazvedkaPostoyannoVipolniaemaeComponent implements OnInit {
  form: Array<FormFieldModel> = [];

  listOfData = [];

  addPu(id) {
    // const index = this.listOfData.findIndex(el => el.id === id);
    // const insert = (arr, index, newItem) => [
    //   ...arr.slice(index),
    //   newItem,
    //   ...arr.slice(0, index)
    // ]
    // this.listOfData = insert(this.listOfData, index, new PuModel('Площадь района расположения ПУ'));
  }

  removePu(id) {
    const index = this.listOfData.findIndex(el => el.id === id);
  }

  constructor() {
    this.form.push(new FormFieldModel('Площадь района расположения ПУ', FieldFormsTypes.punktUpravleniya));
    this.form.push(new FormFieldModel('Всего ПУ'));

    // this.listOfData.push(new PuModel('Площадь района расположения ПУ' ,true, true));
    // this.listOfData.push(new PuModel('Всего ПУ'));
    // this.listOfData.push(new PuModel('Общая площадь районов расположения ПУ'));
    // this.listOfData.push(new PuModel('Время выполнения'));
    // this.listOfData.push(new PuModel('Площадь района расположения РХБОО' ,true, true));
    // this.listOfData.push(new PuModel('Всего РХБОО'));
    // this.listOfData.push(new PuModel('Общая площадь районов расположения РХБОО'));
    // this.listOfData.push(new PuModel('Время выполнения'));



    // this.setPuLength();
    // this.setSumSquare();
  }

  setPuLength() {
    const el = this.listOfData.find(el => el.name == 'Всего ПУ');
    const elRH = this.listOfData.find(el => el.name == 'Всего РХБОО');
    el.value = this.listOfData.filter(el => el.isPu == true).length;
    elRH.value = this.listOfData.filter(el => el.isPu == true).length;
  }

  setSumSquare() {
    let val = 0
    const el = this.listOfData.find(el => el.name == 'Общая площадь районов расположения ПУ');
    const items = this.listOfData.filter(el => el.isPu == true);
    let len = items.length;
    while(len --) {
      val=+parseInt(items[len].value) || 0;
    }
    el.value = val;
  }

  ngOnInit() {
  }

}
