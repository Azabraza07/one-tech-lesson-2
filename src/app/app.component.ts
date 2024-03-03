import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lesson-2';
  inputText: string = '';
  hasSpecialCharacters: boolean = false;
  isPrime: boolean | null = null;
  savedItems: { text: string }[] = [];

  checkInput() {
    this.hasSpecialCharacters = !/^[a-zA-Z0-9]+$/.test(this.inputText);

    if (!this.hasSpecialCharacters) {
      const num = parseInt(this.inputText, 10);
      this.isPrime = this.isPrimeNumber(num);
    }
  }

  saveInput() {
    if (!this.hasSpecialCharacters && this.isPrime !== null) {
      this.savedItems.push({ text: this.inputText });
      this.inputText = '';
      this.hasSpecialCharacters = false;
      this.isPrime = null;
    }
  }

  isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
