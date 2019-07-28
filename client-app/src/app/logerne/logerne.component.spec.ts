import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogerneComponent } from './logerne.component';

describe('LogerneComponent', () => {
  let component: LogerneComponent;
  let fixture: ComponentFixture<LogerneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogerneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogerneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
