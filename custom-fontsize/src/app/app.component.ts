import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fontSizeInput', { static: false }) fontSizeInput!: ElementRef<HTMLInputElement>;

  fontSize = 12;
  fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
  isDropdownOpen = false;

  constructor() {}

  validateNumberInput(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if ((event.key < '0' || event.key > '9') && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  onFontSizeInput(value: string): void {
    const inputValue = Math.abs(parseInt(value.replace(/\D/g, ''), 10));
    this.fontSize = inputValue > 0 ? inputValue : 12;
    this.updateInputValue();
  }

  selectFontSize(size: number): void {
    this.fontSize = size;
    this.updateInputValue();
    this.isDropdownOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  private updateInputValue(): void {
    if (this.fontSizeInput) {
      this.fontSizeInput.nativeElement.value = this.fontSize.toString();
    }
  }
}