import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private fontSize: number = 16; // Tamaño base en px

  constructor() {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      this.fontSize = parseInt(savedFontSize, 10);
      this.applyFontSize();
    }
  }

  increaseFontSize(): void {
    if (this.fontSize < 24) { // Límite máximo
      this.fontSize += 2;
      this.updateFontSize();
    }
  }

  decreaseFontSize(): void {
    if (this.fontSize > 12) { // Límite mínimo
      this.fontSize -= 2;
      this.updateFontSize();
    }
  }

  resetFontSize(): void {
    this.fontSize = 16;
    this.updateFontSize();
  }

  private updateFontSize(): void {
    localStorage.setItem('fontSize', this.fontSize.toString());
    this.applyFontSize();
  }

  private applyFontSize(): void {
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }
}
