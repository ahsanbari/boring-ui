import { designTokens } from "../tokens";
import { BoringToggleItem } from "./BoringToggleItem";
import { colorPalette } from "../colors";

export enum BoringToggleGroupType {
	Accent = "accent",
	Default = "default",
}

export class BoringToggleGroup extends HTMLElement {
	private _type?: BoringToggleGroupType;

	constructor() {
		super();
		const template = document.createElement("template");
		template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    border-radius: ${designTokens.borderRadius.toggleGroup};
                    background-color: ${designTokens.backgroundColor.ghost.secondary};
                    padding: 4px;
                    gap: 4px;
                }
                :host([type="accent"]) {
                    background-color: ${colorPalette.neutral.lighter}
                }
                :host([type='default']) {
                    gap: 5px;
                    border: 1px solid ${designTokens.backgroundColor.ghost.tertiary};
                }

            </style>
            <slot></slot>
        `;
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		this.setActiveItem();
		const toggleItems =
			this.querySelectorAll<BoringToggleItem>("boring-toggle-item");
		toggleItems.forEach((item) => {
			this.type == BoringToggleGroupType.Accent
				? item.setAttribute("toggle-type", "accent")
				: item.setAttribute("toggle-type", "default");

			item.addEventListener("click", () => {
				this.setActiveItem(item);
				const toggleEvent = new CustomEvent("toggle", {
					bubbles: true,
				});
				this.dispatchEvent(toggleEvent);
			});
		});
	}

	get type(): BoringToggleGroupType {
		return this._type!;
	}

	set type(value: BoringToggleGroupType) {
		if (this._type !== value) {
			this._type = value;
			const toggleItems =
				this.querySelectorAll<BoringToggleItem>("boring-toggle-item");
			toggleItems.forEach((item) => {
				item.toggleType = value;
			});
		}
	}

	setActiveItem(activeItem?: BoringToggleItem) {
		const items = Array.from(
			this.querySelectorAll<BoringToggleItem>("boring-toggle-item")
		);
		if (!activeItem) {
			activeItem = items.find((item) => item.checked) || items[0];
		}
		items.forEach((item) => {
			if (item === activeItem) {
				setTimeout(() => {
					item.checked = true;
					item.setAttribute("checked", "");
				}, 100); // Set a delay of 100ms
			} else {
				item.checked = false;
				item.removeAttribute("checked");
			}
		});
	}
}
