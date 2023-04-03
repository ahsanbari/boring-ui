import { designTokens } from "../tokens";

export class BoringSwitch extends HTMLElement {
	private input: HTMLInputElement;

	constructor() {
		super();
		const template = document.createElement("template");
		template.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: ${designTokens.text.fontFamily.family};
        }

        label {
          display: inline-block;
          position: relative;
          width: 48px;
          height: 24px;
          margin: 0;
          cursor: pointer;
        }

        /* Hide default input */
        input[type="checkbox"] {
          opacity: 0;
          width: 0;
          height: 0;
        }

        /* Background */
        .slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${designTokens.backgroundColor.ghost.disabled};
          border-radius: 24px;
          transition: ${designTokens.transition.transitionSpeed.fast};
          outline: .5px solid ${designTokens.backgroundColor.default.primary};
        }

        .slider::before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          border-radius: 50%;
          box-shadow: ${designTokens.elevation.small};
          transition: ${designTokens.transition.transitionSpeed.fast};
        }

        input:checked + .slider {
          background-color: ${designTokens.backgroundColor.default.primary};
        }

        input:checked + .slider::before {
          transform: translateX(24px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round::before {
          border-radius: 50%;
        }
      </style>
      <label>
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.input = shadowRoot.querySelector("input")!;

		// Add click event listener to toggle the switch state
		this.addEventListener("click", () => {
			this.toggle();
		});
	}

	public toggle(): void {
		this.input.checked = !this.input.checked;
		this.dispatchEvent(new Event("change"));
	}

	public connectedCallback(): void {
		// Add the 'checked' attribute if the checkbox is checked
		if (this.input.checked) {
			this.setAttribute("checked", "");
		}
	}

	public static get observedAttributes(): string[] {
		return ["checked"];
	}

	public attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	): void {
		if (name === "checked" && oldValue !== newValue) {
			if (newValue === null) {
				this.input.checked = false;
			} else {
				this.input.checked = true;
			}
		}
	}

	public get checked(): boolean {
		return this.input.checked;
	}

	public set checked(value: boolean) {
		if (value) {
			this.setAttribute("checked", "");
		} else {
			this.removeAttribute("checked");
		}
	}
}
