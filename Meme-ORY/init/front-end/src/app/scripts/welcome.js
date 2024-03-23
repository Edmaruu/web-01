
  import template from "../views/welcome.html";
  import { Component } from "./component";
  export class WelcomeComponent extends Component {
    constructor(){  
      super(template)
      this.template = template;
    }
    /* method WelcomeComponent.init */
    init() {

    
      let form = document.querySelector("form.form-signin");
      form.addEventListener(
        "submit",
        // TODO #arrow-function: use arrow function instead.
        (event) => {
          event.preventDefault();
          if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add("was-validated");
          } else {
            let name = event.srcElement.querySelector("#nickname").value;
            let size = parseInt(event.srcElement.querySelector("#size").value);
  
            _startGame(name, size);
          }
        },
        false
      );
  
      return this;
    }
  }
  function _startGame(name, size) {


    let gamePage = "./#game";
  
    window.location = `${gamePage}?name=${name}&size=${size}`;
    }
 