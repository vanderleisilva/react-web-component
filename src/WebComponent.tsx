import React from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./ProductList";

export class ProductListWebComponent extends HTMLElement {
  mountPoint: HTMLDivElement;
  isRendered: boolean;

  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);
    this.isRendered = false;
  }

  static get observedAttributes() {
    return ["title", "description", "amount"];
  }

  connectedCallback() {
    this.render();
    this.isRendered = true;
  }

  attributeChangedCallback() {
    if (this.isRendered) {
      this.render();
    }
  }

  private render() {
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const amount = parseInt(this.getAttribute("amount") || "1");

    ReactDOM.render(
      <ProductList title={title} description={description} amount={amount} />,
      this.mountPoint
    );
  }
}
