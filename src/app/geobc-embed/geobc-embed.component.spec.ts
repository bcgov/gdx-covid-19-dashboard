import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeobcEmbedComponent } from './geobc-embed.component';

describe('GeobcEmbedComponent', () => {
  let component: GeobcEmbedComponent;
  let fixture: ComponentFixture<GeobcEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeobcEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeobcEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
