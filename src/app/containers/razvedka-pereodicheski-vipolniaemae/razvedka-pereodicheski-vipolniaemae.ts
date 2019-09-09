import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { StoreService } from "../../services/store.service";
import { take, takeUntil } from "rxjs/operators";
import { TempGoingForminterface } from "../../entities/ongoing.interface";

@Component({
	selector: 'razvedka-pereodicheski',
	templateUrl: './razvedka-pereodicheski-vipolniaemae.html',
	styleUrls: ['./razvedka-pereodicheski-vipolniaemae.less']
})
export class RazvedkaPereodicheskiVipolniaemae implements OnInit{
	
	form: FormGroup;
  private _unsubscriber$ = new Subject();

  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder) { }
  
  get f() { return this.form.controls; }
  get pu() { return this.f.pu as FormArray; }
  get objects() { return this.f.objects as FormArray; }
  get timeTocomplite() {return this.f.timeTocomplite}

  ngOnDestroy() {
    this._unsubscriber$.next(true);
    this._unsubscriber$.unsubscribe();
  }
  
  ngOnInit() {
    

    this.storeService.getTempGoingTasks().pipe(
      take(1),
      takeUntil(this._unsubscriber$))
      .subscribe(form => {
        this.initForm(form);
      });

    this.form.valueChanges
    .pipe(takeUntil(this._unsubscriber$))
    .subscribe((data: TempGoingForminterface)  => {
      this.storeService.setTempGoingTasks(data);
    });

  }

  initForm(form: TempGoingForminterface) {
    if (form) {
      this.form = this.formBuilder.group({
        puSum: form.puSum,
        objectsSum: form.objectsSum,
        objects: this.formBuilder.array(form.objects.map(el => this.formBuilder.group(el))),
        pu: this.formBuilder.array(form.pu.map(el => this.formBuilder.group(el))),
				timeTocomplite: [form.timeTocomplite, [Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
				timeTocompliteRouts: [form.timeTocompliteRouts, [Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
      })
    } else {
      this.form = this.formBuilder.group({
        puSum: {
          name: 'Всего районов',
          value: 1,
          tottal: 0
        }, 
        objectsSum: {
          name: 'Количество маршрутов',
          value: 1,
          tottal: 0
        }, 
				timeTocomplite: [null, [Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
				timeTocompliteRouts: [null, [Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
        pu: new FormArray([this.getPu()]),
        objects: new FormArray([this.getObject()])
      });
    }
   
  }

  

  /**РХБ опасный объект */
  getObject() {
    return this.formBuilder.group({
      name: ['Протяженность маршрута'],
      value: [null, [
        Validators.pattern("[+-]?([0-9]+([\.,][0-9]*)?|[\.,][0-9]+)")]],
      objectName: [null],
      id: this.randomInteger()
    })
  }

  /**Пункт управления */
  getPu() {
    return this.formBuilder.group({
      name: ['Площадь района расположения'],
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
    this.form.get('timeTocomplite').patchValue(time);
	}
	
	onSetTimeRoutes(time) {
		this.form.get('timeTocompliteRouts').patchValue(time);
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
        name: 'Количесво районов',
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


}