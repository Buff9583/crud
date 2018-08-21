import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFuncComponent } from './some-func.component';

describe('SomeFuncComponent', () => {
  let component: SomeFuncComponent;
  let fixture: ComponentFixture<SomeFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
