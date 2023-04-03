
import { designTokens } from "../tokens";
import { BoringToggleItem } from "./BoringToggleItem";

export class BoringToggleGroup extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          background-color: ${designTokens.backgroundColor.ghost.secondary};
          padding: 0.5rem;
        }
        boring-toggle-item:not(:last-child) {
          margin-right: 0.5rem;
        }
      </style>
      <slot></slot>
    `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.addEventListener("toggle", this.handleToggle);
  }

  connectedCallback() {
    this.setActiveItem();
  }

  handleToggle = (event: any) => {
    const { target } = event;
    if (target instanceof BoringToggleItem) {
      this.setActiveItem(target);
    }
  };

  setActiveItem(activeItem?: BoringToggleItem) {
    const items = Array.from(
      this.querySelectorAll<BoringToggleItem>("boring-toggle-item")
    );
    if (!activeItem) {
      activeItem = items.find((item) => item.checked) || items[0];
    }
    items.forEach((item) => {
      item.checked = item === activeItem;
    });
  }
}
