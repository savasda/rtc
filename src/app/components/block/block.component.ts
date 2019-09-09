import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.less']
})
export class BlockComponent implements OnInit {
  @Input() blockData: any;
  constructor() { }

  ngOnInit() {
  }

}
