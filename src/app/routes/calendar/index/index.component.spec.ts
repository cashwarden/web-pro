import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarIndexComponent } from './index.component';

describe('CalendarIndexComponent', () => {
  let component: CalendarIndexComponent;
  let fixture: ComponentFixture<CalendarIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
