import { designTokens } from "../tokens";
import { BoringToggleGroup } from "./BoringToggleGroup";

export class BoringToggleItem extends HTMLElement {
	private _checked: boolean = false;

	constructor() {
		super();

		const template = document.createElement("template");
		template.innerHTML = `
        <style>
        :host {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem;
          cursor: pointer;
          user-select: none;
        }
        :host(:hover) {
          background-color: ${designTokens.backgroundColor.ghost.secondary};
        }
        :host([checked]) {
          background-color: ${designTokens.backgroundColor.default.primary};
          color: white;
        }
        </style>
        <slot></slot>
    `;
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
		this.addEventListener("click", this.handleClick);
	}

	connectedCallback() {
		if (!this.hasAttribute("role")) {
			this.setAttribute("role", "tab");
		}
	}

	get checked() {
		return this._checked;
	}

	set checked(value) {
		const oldValue = this._checked;
		this._checked = value;
		if (value !== oldValue) {
			if (value) {
				this.setAttribute("checked", "");
			} else {
				this.removeAttribute("checked");
			}
			this.dispatchEvent(new CustomEvent("toggle", { bubbles: true }));
		}
	}

	handleClick = () => {
		if (!this.checked) {
			const group = this.closest("boring-toggle-group");
			if (group instanceof BoringToggleGroup) {
				group.setActiveItem(this);
			}
		}
	};
}
