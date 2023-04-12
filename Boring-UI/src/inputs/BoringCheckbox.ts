import { designTokens } from "../tokens";

export class BoringCheckbox extends HTMLElement {
	public checkboxInput: HTMLInputElement;

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

            input[type="checkbox"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 1px solid ${designTokens.backgroundColor.default.primary};
                border-radius: ${designTokens.borderRadius.input};
                margin: 0;
                vertical-align: middle;
                position: relative;
                cursor: pointer;

                transition: ${designTokens.transition.transitionSpeed.fast};
            }

            input[type="checkbox"]:checked {
                background-color: ${designTokens.backgroundColor.default.primary};
            }

            input[type="checkbox"]:checked:before {
                content: "";
                display: block;
                position: absolute;
                left: 3.5px;
                width: 5px;
                height: 9px;
                border: solid ${designTokens.backgroundColor.baseColors.white};
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }

            label {
                display: inline-block;
                margin-left: 4px;
                vertical-align: middle;
            }
        </style>
        <label>
            <input type="checkbox">
            <slot></slot>
        </label>
        `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.checkboxInput = shadowRoot.querySelector(
			"input[type='checkbox']"
		)!;
		this.checkboxInput.addEventListener("change", () => {
			this.dispatchEvent(new Event("change"));
		});
	}

	public get checked() {
		return this.checkboxInput.checked;
	}

	public set checked(value: boolean) {
		this.checkboxInput.checked = value;
	}
}
