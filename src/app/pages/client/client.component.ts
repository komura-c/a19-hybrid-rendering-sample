import { Component } from '@angular/core';
import { DogsImageViewerComponent } from '../../features/dogs-image-viewer/dogs-image-viewer.component';

@Component({
  selector: 'app-client',
  imports: [DogsImageViewerComponent],
  template: `
    <p style="text-align: center">client works!</p>
    <app-dogs-image-viewer />
  `,
})
export class ClientComponent {}
