import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JicUpdatesComponent } from './jic-updates.component';

describe('JicUpdatesComponent', () => {
  let component: JicUpdatesComponent;
  let fixture: ComponentFixture<JicUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JicUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JicUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
