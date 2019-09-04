import { Component, OnInit, Input } from '@angular/core';
import { BlockInterface } from '../../entities/block.interface';

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
