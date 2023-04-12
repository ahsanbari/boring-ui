import { designTokens } from "../tokens";

export class BoringRadio extends HTMLElement {
	public radioInput: HTMLInputElement;

	constructor() {
		super();

		const template = document.createElement("template");
		template.innerHTML = `
        <style>
            :host {
                display: inline-block;
                font-size: 1rem;
                font-weight: 400;
                color: ${designTokens.text.textColor.black};
                margin: 0;
                padding: 0;
            }

            input[type="radio"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 1px solid ${designTokens.backgroundColor.secondary.secondary};
                border-radius: 50%;
                margin: 0;
                vertical-align: middle;
                position: relative;
                cursor: pointer;

                transition: ${designTokens.transition.transitionSpeed.fast};
            }
            input[type="radio"]:hover {
                background-color: ${designTokens.backgroundColor.ghost.secondary};
            }
            input[type="radio"]:active {
                background-color: ${designTokens.backgroundColor.secondary.secondary};
            }

            input[type="radio"]:checked {
                border: 1.5px solid ${designTokens.backgroundColor.default.primary};
            }
            input[type="radio"]:checked:hover {
                border: 1.5px solid ${designTokens.backgroundColor.default.secondary};
            }
            input[type="radio"]:checked:active {
                border: 1.5px solid ${designTokens.backgroundColor.default.tertiary};
            }
            input[type="radio"]:checked:before {
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(1);
                border-radius: 50%;
                background-color: ${designTokens.backgroundColor.default.primary};
                width: 10px;
                height: 10px;
            }

            label {
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            }
        </style>
        <label>
            <input type="radio">
            <slot></slot>
        </label>
        `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.radioInput = shadowRoot.querySelector("input[type='radio']")!;
		this.radioInput.addEventListener("change", () => {
			this.dispatchEvent(new Event("change"));
		});
	}

	public get checked() {
		return this.radioInput.checked;
	}

	public set checked(value: boolean) {
		this.radioInput.checked = value;
	}
}
