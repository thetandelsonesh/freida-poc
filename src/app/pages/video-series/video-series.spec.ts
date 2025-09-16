import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSeries } from './video-series';

describe('VideoSeries', () => {
  let component: VideoSeries;
  let fixture: ComponentFixture<VideoSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSeries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSeries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
