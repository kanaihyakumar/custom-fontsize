# Angular Custom Font Size Selector

This is an Angular component that provides a custom font size selector with both an input field and a dropdown menu. The user can either type in the desired font size or select it from the dropdown menu. The component will only accept absolute values (integers) and will not allow decimal values.

## Features

- Input field for entering font size
- Dropdown menu with predefined font size options
- Validation to accept only absolute values (integers)
- Prevent non-numeric input in the input field
- Automatic update of the input field's value when selecting from the dropdown

## Installation

1. Clone the repository or copy the component files (`app.component.ts`, `app.component.html`, `app.component.css`) into your Angular project.

2. Import the `AppComponent` in your module file (`app.module.ts`):

   ```
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```
Use the <app-root> selector in your main component's template to include the font size selector.

Usage

In your component's template, use the <app-root> selector to include the font size selector.
In your component's TypeScript file, you can access the selected font size through the fontSize property of the AppComponent.

```
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  template: `
    <app-root></app-root>
    <div>Selected Font Size: {{ selectedFontSize }}</div>
  `
})
export class YourComponent {
  selectedFontSize: number;

  constructor(private appComponent: AppComponent) {
    this.appComponent.fontSize.subscribe(fontSize => {
      this.selectedFontSize = fontSize;
    });
  }
}
```
You can customize the font size options by modifying the fontSizes array in the AppComponent.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
