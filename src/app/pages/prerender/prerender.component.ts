import { Component } from '@angular/core';
import { DogsImageViewerComponent } from '../../features/dogs-image-viewer/dogs-image-viewer.component';

@Component({
  selector: 'app-prerender',
  imports: [DogsImageViewerComponent],
  template: `
    <p style="text-align: center">prerender works!</p>
    <app-dogs-image-viewer />
  `,
})
export class PrerenderComponent {}
