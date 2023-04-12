import { designTokens } from "../tokens";

export class BoringTextbox extends HTMLElement {
	public textboxInput: HTMLInputElement;
	public clearButton: HTMLElement;

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

            .wrapper {
                display: flex;
                width: 100%;
                align-items: center;
                position: relative;
            }

            label {
                font-size: inherit;
                font-weight: inherit;
                color: inherit;
                position: absolute;
                top: -1.25rem;
                left: 1rem;
                pointer-events: none;
                transition: ${designTokens.transition.transitionSpeed.fast};
            }

            input[type="text"] {
                display: inline-block;
                font-size: inherit;
                font-weight: inherit;
                color: inherit;
                height: 2.5rem;
                border: 1px solid ${designTokens.backgroundColor.default.primary};
                border-radius: ${designTokens.borderRadius.input};
                padding: 0.5rem 1rem 0.5rem 2rem;
                margin: 0;
                vertical-align: middle;
                box-sizing: border-box;

                transition: ${designTokens.transition.transitionSpeed.fast};
            }

            .clear-button {
                display: inline-block;
                position: absolute;
                right: 30px;
                background-color: transparent;
                vertical-align: middle;
                cursor: pointer;

                transition: ${designTokens.transition.transitionSpeed.fast};
            }

            .clear-button:focus {
                outline: none;
            }
        </style>
        <label><slot></slot></label>
        <div class="wrapper">
            <input type="text" placeholder="">
            <boring-button type="ghost" class="clear-button" aria-label="Clear">&times;</boring-button>
        </div>
        `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.textboxInput = shadowRoot.querySelector("input[type='text']")!;
		this.clearButton = shadowRoot.querySelector(".clear-button")!;
		this.clearButton.addEventListener("click", () => {
			this.textboxInput.value = "";
		});
	}

	public get value() {
		return this.textboxInput.value;
	}

	public set value(value: string) {
		this.textboxInput.value = value;
	}
}
