import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BlockInterface } from '../../entities/block.interface';
import { makePath } from '../../shared/methods';

@Component({
  selector: 'app-razvedka',
  templateUrl: './razvedka.component.html',
  styleUrls: ['./razvedka.component.less']
})
export class RazvedkaComponent {
  data: Array<any> = [
    {link:"/", content: 'Возможный объем задач'},
    {link:"/", content: 'Возможности соединения'},
    {link:"/rz/postoyanno", content: 'Постоянно выполняемые задачи'},
    {link:"/", content: 'Переодически выполняемые задачи'},
  ]
}
