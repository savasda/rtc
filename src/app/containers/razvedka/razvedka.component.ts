import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var Treant: any;

@Component({
  selector: 'app-razvedka',
  templateUrl: './razvedka.component.html',
  styleUrls: ['./razvedka.component.less']
})
export class RazvedkaComponent implements OnInit, AfterViewInit {
  private REGULARY_EVENTS_CKASS = 'regulary_events-node';
  private TEMPRERARY_EVENTS_CLASS = 'temprerary_events-node';

  config = {
    container: "#tree-simple",
    nodeAlign: "BOTTOM",
    connectors: {
        type: 'step'
    },
    node: {
        HTMLclass: 'graph-node'
    }
  };
  parent_node = {
      text: { name: "Разведка" }
  };
  first_child = {
      parent: this.parent_node,
      text: { name: "Возможный объем задач" },
  };
  second_child = {
      parent: this.parent_node,
      text: { name: "Возможности соединения" }
  };
  second_child_child = {
    parent: this.first_child,
    text: { name: "Постоянно выполняемые задачи" },
    HTMLclass: this.REGULARY_EVENTS_CKASS
  };

  second_child_child_2 = {
    parent: this.first_child,
    text: { name: "Переодически выполняемые задачи" },
    HTMLclass: this.TEMPRERARY_EVENTS_CLASS
  };

  simple_chart_config = [
    this.config, this.parent_node,
    this.first_child, this.second_child, 
    this.second_child_child, this.second_child_child_2
  ];
  
  constructor(private _router: Router) {
    
  }

  ngOnInit() {
    Treant(this.simple_chart_config)
  }

  ngAfterViewInit() {
    
    const regularyEvents = document.querySelector(`.${this.REGULARY_EVENTS_CKASS}`);
    const tempreraryEvents = document.querySelector(`.${this.TEMPRERARY_EVENTS_CLASS}`);
    regularyEvents.addEventListener('click', () => {
      this._router.navigate(['/postoyanno'])
    });
    tempreraryEvents.addEventListener('click', () => {
      this._router.navigate(['/temp'])
    });

  }


}
