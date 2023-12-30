import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  sayHello(_t2: HTMLInputElement) {
    alert('Hello' + _t2.value);
  }
}
