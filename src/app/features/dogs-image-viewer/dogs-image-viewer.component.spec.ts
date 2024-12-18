import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsImageViewerComponent } from './dogs-image-viewer.component';

describe('DogsImageViewerComponent', () => {
  let component: DogsImageViewerComponent;
  let fixture: ComponentFixture<DogsImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsImageViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
