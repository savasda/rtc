import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazvedkaPostoyannoVipolniaemaeComponent } from './razvedka-postoyanno-vipolniaemae.component';

describe('RazvedkaPostoyannoVipolniaemaeComponent', () => {
  let component: RazvedkaPostoyannoVipolniaemaeComponent;
  let fixture: ComponentFixture<RazvedkaPostoyannoVipolniaemaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazvedkaPostoyannoVipolniaemaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazvedkaPostoyannoVipolniaemaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
