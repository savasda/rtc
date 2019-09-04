import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazvedkaComponent } from './razvedka.component';

describe('RazvedkaComponent', () => {
  let component: RazvedkaComponent;
  let fixture: ComponentFixture<RazvedkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazvedkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazvedkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
