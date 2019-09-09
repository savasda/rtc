import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-razvedka-postoyanno-vipolniaemae',
  templateUrl: './razvedka-postoyanno-vipolniaemae.component.html',
  styleUrls: ['./razvedka-postoyanno-vipolniaemae.component.less']
})
export class RazvedkaPostoyannoVipolniaemaeComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  get f() { return this.form.controls; }
  get pu() { return this.f.pu as FormArray; }
  get objects() { return this.f.objects as FormArray; }
  get timeTocomplite() {return this.f.timeTocomplite}

  ngOnInit() {
    this.form = this.formBuilder.group({
      puSum: {
        name: 'Всего ПУ',
        value: 1,
        tottal: 0
      }, 
      objectsSum: {
        name: 'Всего РХБ опасных объетов',
        value: 1,
        tottal: 0
      }, 
      timeTocomplite: [null, [Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
      pu: new FormArray([this.getPu()]),
      objects: new FormArray([this.getObject()])
    });
  }

  /**РХБ опасный объект */
  getObject() {
    return this.formBuilder.group({
      name: ['Площадь района расположения РХБ опасного объекта'],
      value: [null, [
        Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
      objectName: [null],
      id: this.randomInteger()
    })
  }

  /**Пункт управления */
  getPu() {
    return this.formBuilder.group({
      name: ['Площадь района расположения ПУ'],
      value: [null, [
        Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
      puName: [null],
      id: this.randomInteger()
    })
  }

  deletePu(id: number) {
    this.pu.removeAt(this.pu.value.findIndex(el => el.id === id));
    this.updatePUsum();
  }

  sumValues() {
    this.updatePUsum();
  }

  sumObjectsValues() {
    this.updateObjectssum();
  }

  addPu() {
    this.pu.push(this.getPu());
    this.updatePUsum();
  }

  /**Добавить РХБ опасный объект */
  addObject() {
    this.objects.push(this.getObject());
    this.updateObjectssum();
  }
  /**удалить РХБ опасный объект */
  deleteObject(id: number) {
    this.objects.removeAt(this.pu.value.findIndex(el => el.id === id));
    this.updateObjectssum();
  }

  onSetTime(time) {
    console.log(time)
  }

  updatePUsum() {
    const add = function (accumulator, a)  {
      return accumulator + a;
    };
    const pu = this.form.get('pu').value;
    if(pu) {
      const numbers = pu.map(el => {
        if(!el.value) return 0;
        return +el.value!.replace(",",".");
      });

      this.form.get('puSum').patchValue({
        name: 'Всего ПУ',
        value: this.form.get('pu').value.length,
        tottal: numbers.reduce(add,0).toFixed(2)
      })
    }
  }


  updateObjectssum() {
    const add = function (accumulator, a)  {
      return accumulator + a;
    };
    const object = this.form.get('objects').value;
    if(object) {
      const numbers = object.map(el => {
        if(!el.value) return 0;
        return +el.value!.replace(",",".");
      });

      this.form.get('objectsSum').patchValue({
        name: 'Всего РХБ опасных объетов',
        value: this.form.get('objects').value.length,
        tottal: numbers.reduce(add,0).toFixed(2)
      })
    }
  }

  private randomInteger() {
    let rand = 1 - 0.5 + Math.random() * (1000000000000 - 1 + 1);
    return Math.round(rand);
  }

  getform() {
    console.log(this.form.value)
  }
}
