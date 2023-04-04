import { designTokens } from "../tokens";
import { BoringToggleGroup, BoringToggleGroupType } from "./BoringToggleGroup";

export class BoringToggleItem extends HTMLElement {
	private _checked: boolean = false;
	public toggleType?: BoringToggleGroupType;
	constructor() {
		super();
		const template = document.createElement("template");
		template.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0.5rem;
          height: 100%;
          background-color: ${designTokens.backgroundColor.ghost.primary};
          border-radius: ${designTokens.borderRadius.button};
          transition: ${designTokens.transition.transitionSpeed.fast};
        }
        :host(:hover) {
          background-color: ${designTokens.backgroundColor.ghost.disabled};
        }

        :host([toggle-type="default"]) {
          color: ${designTokens.text.textColor.black};
        }
        :host([toggle-type="default"][checked]) {
          background-color: ${designTokens.backgroundColor.baseColors.white};
          box-shadow: ${designTokens.elevation.small};
        }

        :host([toggle-type="accent"]) {
          color: ${designTokens.text.textColor.accent};
        }
        :host([toggle-type="accent"][checked]) {
          background-color: ${designTokens.backgroundColor.default.primary};
          color: ${designTokens.text.textColor.white};
        }



        :host(:active) {
          transform: scale(0.95);
        }
      </style>
      <slot></slot>
    `;
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
		this.addEventListener("click", this.handleClick);
		const parent = this.parentNode as Element;
		if (parent instanceof BoringToggleGroup) {
			this.setAttribute("toggle-type", parent.getAttribute("type")!);
		}
	}

	get checked() {
		return this._checked;
	}

	set checked(value: boolean) {
		const oldValue = this._checked;
		this._checked = value;
		if (value !== oldValue) {
			this.dispatchEvent(
				new CustomEvent("toggle", {
					bubbles: true,
					detail: { checked: this._checked },
				})
			);
			if (value) {
				this.setAttribute("checked", "");
			} else {
				this.removeAttribute("checked");
			}
		}
	}

	handleClick = () => {
		const group = this.parentElement;
		if (group instanceof BoringToggleGroup) {
			group.setActiveItem(this);
		}
	};
}
