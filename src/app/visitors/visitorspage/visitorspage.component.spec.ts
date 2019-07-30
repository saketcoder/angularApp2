import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorspageComponent } from './visitorspage.component';

describe('VisitorspageComponent', () => {
  let component: VisitorspageComponent;
  let fixture: ComponentFixture<VisitorspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
