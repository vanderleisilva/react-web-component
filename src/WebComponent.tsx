import React from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./ProductList";

export class ProductListWebComponent extends HTMLElement {
  mountPoint: HTMLDivElement;

  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);
  }

  static get observedAttributes() {
    return ["name", "description", "amount"];
  }

  attributeChangedCallback() {
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const amount = parseInt(this.getAttribute("amount") || "1");

    ReactDOM.render(
      <ProductList title={title} description={description} amount={amount} />,
      this.mountPoint
    );
  }
}
