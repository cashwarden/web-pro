import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyIndexComponent } from './index.component';

describe('CurrencyIndexComponent', () => {
  let component: CurrencyIndexComponent;
  let fixture: ComponentFixture<CurrencyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
