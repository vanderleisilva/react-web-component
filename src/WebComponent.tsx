import React from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./ProductList";

export class ProductListWebComponent extends HTMLElement {
  mountPoint: HTMLDivElement;
  stylePoint: HTMLDivElement;
  isRendered: boolean;

  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.stylePoint = document.createElement("div");

    this.attachShadow({ mode: "open" }).append(
      this.mountPoint,
      this.stylePoint
    );

    this.isRendered = false;
  }

  static get observedAttributes() {
    return ["title", "description", "amount", "template-id"];
  }

  connectedCallback() {
    this.template();
    this.render();
    this.isRendered = true;
  }

  disconnectedCallback() {
    this.shadowRoot && ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }

  attributeChangedCallback(attr: string) {
    if (!this.isRendered) return;

    if (attr === "template-id") {
      return this.template();
    }

    this.render();
  }

  private template() {
    const templateElement = document.getElementById(
      this.getAttribute("template-id") || ""
    ) as HTMLTemplateElement;

    if (!(templateElement instanceof HTMLTemplateElement)) return;

    const update = () => {
      this.stylePoint.innerHTML = "";

      this.stylePoint.append(
        templateElement.content.querySelector("style")?.cloneNode(true) || "",
        templateElement.content.querySelector("link")?.cloneNode(true) || ""
      );
    };

    const observer = new MutationObserver(update);

    observer.observe(templateElement.content, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });

    update();
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
