import { Component } from '@angular/core';
import { DogsImageViewerComponent } from '../../features/dogs-image-viewer/dogs-image-viewer.component';

@Component({
  selector: 'app-server',
  imports: [DogsImageViewerComponent],
  template: `
    <p style="text-align: center">server works!</p>
    <app-dogs-image-viewer />
  `,
})
export class ServerComponent {}
