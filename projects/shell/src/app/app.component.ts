import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Shell Application</h1>
    <button routerLink="mfe1">Load Microfrontend 1</button>
    <button routerLink="mfe2">Load Microfrontend 2</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
}
