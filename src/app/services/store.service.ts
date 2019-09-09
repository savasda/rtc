import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { OnGoingFormInterface, TempGoingForminterface } from "../entities/ongoing.interface";

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	private ongoingTasks$ = new BehaviorSubject<OnGoingFormInterface>(null);
	private tempGoingTasks$ = new BehaviorSubject<TempGoingForminterface>(null);
	/**Записать постоянно выполняемые задачи */
	setOngoingTasks(form: OnGoingFormInterface) {
		this.ongoingTasks$.next(form);
	}
	/**Записать переодически выполняемые задачи */
	setTempGoingTasks(form: TempGoingForminterface) {
		this.tempGoingTasks$.next(form);
	}
	/**Получить постоянно выполняемые задачи */
	getOngoingTasks() : Observable<OnGoingFormInterface> {
		return this.ongoingTasks$.asObservable();
	}
	/**Получить переодически выполняемые задачи */
	getTempGoingTasks() : Observable<TempGoingForminterface> {
		return this.tempGoingTasks$.asObservable();
	}
}