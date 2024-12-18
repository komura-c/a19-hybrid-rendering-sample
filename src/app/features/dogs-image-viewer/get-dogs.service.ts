import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDogsService {
  private http = inject(HttpClient);

  async getRandomDogImages() {
    const res = await firstValueFrom(
      this.http.get<{
        message: string[];
        status: 'success' | 'error';
      }>('https://dog.ceo/api/breeds/image/random/5')
    );
    return res.message;
  }
}
