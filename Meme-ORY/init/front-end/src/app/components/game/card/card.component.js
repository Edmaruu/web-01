import "./card.component.html";
import "./card.component.css";
import { Component } from "../../../scripts/component";
import template from "./card.component.html";

let CARDS_IMAGE = [
  "/src/assets/cards/back.png",
  "/src/assets/cards/card-0.png",
  "/src/assets/cards/card-1.png",
  "/src/assets/cards/card-2.png",
  "/src/assets/cards/card-3.png",
  "/src/assets/cards/card-4.png",
  "/src/assets/cards/card-5.png",
  "/src/assets/cards/card-6.png",
  "/src/assets/cards/card-7.png",
  "/src/assets/cards/card-8.png",
  "/src/assets/cards/card-9.png",
];
 /* class CardComponent constructor */
 export class CardComponent extends Component{
    constructor(id){
    super(template)
    // is this card flipped?
    this._flipped = false;
    this.template = template;

    // has the matching card has been discovered already?
    this.matched = false;

    this._elt = document.createElement("div");
    this._elt.innerHTML = this.template;
    this._elt = this._elt.firstElementChild;
    this._id = id;

    this._imageElt = this.getElement().querySelector(".card-wrapper");
    this._imageElt.querySelector("img.front-face").src =
      CARDS_IMAGE[this._id + 1];
    this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }
    /* method CardComponent.getElement */
    getElement(){
      return this._elt;
    }
    /* method CardComponent.flip */
    flip(){
      this._imageElt.classList.toggle("flip");
      this._flipped = !this._flipped;
    }
    /* method CardComponent.equals */
    equals(card) {
      return card._id === this._id;
    }
    get flipped() {
      return this._flipped;
    }
  
    set flipped(_flipped) {
      this._flipped = _flipped;
    }
  }




