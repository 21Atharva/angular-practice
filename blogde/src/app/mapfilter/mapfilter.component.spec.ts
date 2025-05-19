import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfilterComponent } from './mapfilter.component';

describe('MapfilterComponent', () => {
  let component: MapfilterComponent;
  let fixture: ComponentFixture<MapfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
