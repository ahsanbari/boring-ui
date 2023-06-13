import { designTokens } from "../tokens";

export class BoringSlider extends HTMLElement {
	public sliderInput: HTMLInputElement;

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
          width: 100%;
        }

        .wrapper {
          position: relative;
          height: 1rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 100%;
          background: transparent;
          outline: none;
          margin: 0;
          padding: 0;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 0.5rem;
          cursor: pointer;
          background-color: ${designTokens.backgroundColor.default.primary};
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: ${designTokens.backgroundColor.baseColors.white};
          cursor: pointer;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }

        input[type="range"]::-moz-range-track {
          width: 100%;
          height: 0.5rem;
          cursor: pointer;
          background-color: ${designTokens.backgroundColor.default.primary};
        }

        input[type="range"]::-moz-range-thumb {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: ${designTokens.backgroundColor.baseColors.white};
          cursor: pointer;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }

        input[type="range"]::-ms-track {
          width: 100%;
          height: 0.5rem;
          cursor: pointer;
          background-color: transparent;
          border-color: transparent;
          color: transparent;
        }

        input[type="range"]::-ms-fill-lower {
          background-color: ${designTokens.backgroundColor.default.primary};
        }

        input[type="range"]::-ms-fill-upper {
          background-color: ${designTokens.backgroundColor.baseColors.white};
        }

        input[type="range"]::-ms-thumb {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: ${designTokens.backgroundColor.baseColors.white};
          cursor: pointer;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }
      </style>
      <div class="wrapper">
        <input type="range">
      </div>
    `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.sliderInput = shadowRoot.querySelector("input[type='range']")!;
		this.sliderInput.addEventListener("input", () => {
			this.dispatchEvent(new Event("input"));
		});
	}

	public get value() {
		return this.sliderInput.value;
	}

	public set value(value: string) {
		this.sliderInput.value = value;
	}
}
