import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyFormComponent } from './form.component';

describe('CurrencyFormComponent', () => {
  let component: CurrencyFormComponent;
  let fixture: ComponentFixture<CurrencyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
