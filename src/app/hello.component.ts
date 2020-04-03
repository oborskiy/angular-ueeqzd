import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

@Component({
  selector: 'shit',
  template: `<h1>Hello {{shit}}!</h1>`,
  styles: [`h2 { font-family: Arial; }`]
})
export class ShitComponent  {
  @Input() name: string;
}
