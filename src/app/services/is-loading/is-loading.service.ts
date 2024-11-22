import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoadingService {
  isLoading = signal(false);

  constructor() {}

  isLoadingHandler() {
    this.isLoading.set(true);
  }

  isLoadingResetHandler() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000); // Agregué este setTimeOut solo para que sea visible el loading effect.
  }
}
