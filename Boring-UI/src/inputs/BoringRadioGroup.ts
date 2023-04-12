import { designTokens } from "../tokens";
import { BoringRadio } from "./BoringRadio";

export class BoringRadioGroup extends HTMLElement {
	public radioButtons: BoringRadio[];

	constructor() {
		super();

		const template = document.createElement("template");
		template.innerHTML = `
        <style>
            :host {
                display: block;
                font-size: 1rem;
                font-weight: 400;
                color: ${designTokens.text.textColor.black};
                margin: 0;
                padding: 0;
            }
        </style>
        <slot></slot>
        `;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.radioButtons = [];

		const slot = shadowRoot.querySelector("slot")!;
		slot.addEventListener("slotchange", () => {
			const radios = slot.assignedElements({
				flatten: true,
			}) as BoringRadio[];

			this.radioButtons = radios;

			radios.forEach((radio) => {
				radio.addEventListener("change", () => {
					if (radio.checked) {
						radios.forEach((r) => {
							if (r !== radio) {
								r.checked = false;
							}
						});
					}
				});
			});
		});
	}
}
