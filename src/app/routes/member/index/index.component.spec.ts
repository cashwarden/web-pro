import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberIndexComponent } from './index.component';

describe('MemberIndexComponent', () => {
  let component: MemberIndexComponent;
  let fixture: ComponentFixture<MemberIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
