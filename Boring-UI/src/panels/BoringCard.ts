import { designTokens } from "../tokens";

export class BoringCard extends HTMLElement {
	constructor() {
		super();

		const template: HTMLTemplateElement =
			document.createElement("template");

		template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    box-sizing: border-box;
                    background-color: ${designTokens.backgroundColor.baseColors.white};
                    border-radius: ${designTokens.borderRadius.toggleGroup};
                    box-shadow: ${designTokens.elevation.small};
                }
            </style>
            <slot></slot>
        `;
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
