import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionThumbnailComponent } from './region-thumbnail.component';

describe('RegionThumbnailComponent', () => {
  let component: RegionThumbnailComponent;
  let fixture: ComponentFixture<RegionThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
