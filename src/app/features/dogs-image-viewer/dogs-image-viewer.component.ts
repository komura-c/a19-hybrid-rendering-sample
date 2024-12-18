import { Component, inject, signal } from '@angular/core';
import { GetDogsService } from './get-dogs.service';

@Component({
  selector: 'app-dogs-image-viewer',
  imports: [],
  template: `
    <div class="dogs-image-viewer">
      <h1>Dogs Image Viewer</h1>
      <button (click)="loadRandomDogImage()">Load Random Dog Image</button>
      <ul class="dog-image-list">
        @for (imageUrl of dogsImages(); track $index) {
        <li>
          <img class="dog-image" [src]="imageUrl" alt="Dog Image" />
        </li>
        }
      </ul>
    </div>
  `,
  styles: `
    .dogs-image-viewer {
      width: 100%;
      max-width: 800px;
      text-align: center;
      margin: 0 auto;
    }
    .dog-image-list {
      list-style: none;

      margin: 0;
      padding: 20px 0 0;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .dog-image {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  `,
})
export class DogsImageViewerComponent {
  private getDogs = inject(GetDogsService);

  dogsImages = signal<string[]>([]);

  ngOnInit(): void {
    this.loadRandomDogImage();
  }

  async loadRandomDogImage() {
    this.dogsImages.set(await this.getDogs.getRandomDogImages());
  }
}
