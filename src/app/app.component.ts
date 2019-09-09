import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('content', {static: true}) content: ElementRef;

  isCollapsed = false;

  ngAfterViewInit() {
    console.log(this.content);

    // window.addEventListener('load', (event) => {
    //   console.log(event)
    // });

    // window.addEventListener('scroll', (event) => {
    //   console.log(event)
    // })

  }

}
