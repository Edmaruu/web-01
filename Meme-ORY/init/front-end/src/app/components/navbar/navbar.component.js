
// Import the HTML template
import template from './navbar.component.html';

// Import CSS styles
import './navbar.component.css';

export class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
      // ...
    }
  }