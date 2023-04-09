import { colorPalette } from "../colors";
import { designTokens } from "../tokens";

export enum ButtonType {
	Default = "default",
	Secondary = "secondary",
	Ghost = "ghost",
}

export class BoringButton extends HTMLElement {
	public onclick:
		| ((this: GlobalEventHandlers, ev: MouseEvent) => any)
		| null = null;
	public disabled?: boolean;

	constructor() {
		super();
		const template = document.createElement("template");
		template.innerHTML = `
      <style>
        :host {
            display: inline-block;
        }

        button {
            
            padding: 0.5rem 1rem;
            border: none;
            cursor: pointer;

            border-radius: ${designTokens.borderRadius.button};
            font-family: ${designTokens.text.fontFamily.family};
            font-weight: ${designTokens.text.fontWeight.Regular};
            font-size: ${designTokens.text.textSize.body};
            transition: ${designTokens.transition.transitionSpeed.fast}
        }
        :host button:not(:disabled):active {
            transform: scale(0.95);
        }

        :host([type="default"]) button {
            background-color: ${designTokens.backgroundColor.default.primary};
            color: ${designTokens.text.textColor.white};
        }
        :host([type="default"]) button:not(:disabled):hover {
            background-color: ${designTokens.backgroundColor.default.secondary};
        }
        :host([type="default"]) button:not(:disabled):active {
            background-color: ${designTokens.backgroundColor.default.tertiary};
        }
        :host([type="default"]) button:not(:disabled):focus {
            outline: 1px solid ${designTokens.backgroundColor.default.disabled};
        }


        :host([type="secondary"]) button {
            background-color: ${designTokens.backgroundColor.secondary.primary};
            color: ${designTokens.text.textColor.black};
            border: 1px solid ${colorPalette.neutral.light};
        }
        :host([type="secondary"]) button:not(:disabled):hover {
            background-color: ${designTokens.backgroundColor.ghost.secondary};
            border: 1px solid ${colorPalette.neutral.medium};
        }
        :host([type="secondary"]) button:not(:disabled):active {
            background-color: ${designTokens.backgroundColor.ghost.disabled};
            border: 1px solid ${colorPalette.neutral.shaded};
        }

        :host([type="ghost"]) button {
            background-color: ${designTokens.backgroundColor.ghost.primary};
            color: ${designTokens.text.textColor.black};
            border: none;
        }
        :host([type="ghost"]) button:not(:disabled):hover {
            background-color: ${designTokens.backgroundColor.ghost.secondary};
        }
        :host([type="ghost"]) button:not(:disabled):active {
            background-color: ${designTokens.backgroundColor.ghost.disabled};
        }


        :host([disabled]) button {
            opacity: 0.5;
            cursor: not-allowed;
        }

        </style>
        <button onclick=${this.onclick} ${
			this.checkDisabled() ? "disabled" : ""
		}>
            <slot></slot>
        </button>
      `;
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
	}

	private checkDisabled(): boolean {
		// Check for disabled attribute and set button disabled property accordingly
		if (this.hasAttribute("disabled")) {
			return true;
		} else {
			return false;
		}
	}
}
