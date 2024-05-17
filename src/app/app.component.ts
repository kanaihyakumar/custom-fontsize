import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSize: number;
  fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
  selectedFontSize: string;
  isDropdownOpen = false;

  constructor() {
    this.fontSize = 12;
    this.selectedFontSize = this.fontSize.toString();
  }

  onFontSizeInput(event: any) {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue > 0) {
      this.fontSize = parseFloat(inputValue);
      this.selectedFontSize = inputValue;
    }
  }

  selectFontSize(size: number) {
    this.fontSize = size;
    this.selectedFontSize = size.toString();
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
