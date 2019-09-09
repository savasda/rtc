export interface OngoingOneFieldInterface {
	name: string;
	tottal: number;
	value: number;
}

export interface OngoingArrayItemFieldInterface {
	id: number;
	name: string;
	objectName: string;
	value: string;
}

export interface OnGoingFormInterface {
	objects: Array<OngoingArrayItemFieldInterface>;
	objectsSum: OngoingOneFieldInterface;
	pu: Array<OngoingArrayItemFieldInterface>;
	puSum: OngoingOneFieldInterface
	timeTocomplite: string;
}

export interface TempGoingForminterface extends OnGoingFormInterface {
	timeTocompliteRouts: string;
}
