import { designTokens } from "../tokens";
import { BoringButton } from "./BoringButton";
import { colorPalette } from "../colors";

export class BoringToggle extends BoringButton {
	private _checked = false;

	constructor() {
		super();
		this.addEventListener("click", this.toggle.bind(this));
	}

	public toggle() {
		this._checked = !this._checked;
		this.render();
	}

	public get checked() {
		return this._checked;
	}

	public set checked(val) {
		this._checked = val;
		this.render();
	}

	public connectedCallback() {
		this.render();
	}

	private render() {
		const button = this.shadowRoot!.querySelector(
			"button"
		) as HTMLButtonElement;
		if (this.checked) {
			button.setAttribute("type", "default");
			button.style.backgroundColor =
				designTokens.backgroundColor.default.primary;
			button.style.color = designTokens.text.textColor.white;
		} else {
			button.setAttribute("type", "ghost");
			button.style.backgroundColor = colorPalette.neutral.medium;
			button.style.color = designTokens.text.textColor.black;
		}
	}

	static get observedAttributes() {
		return ["checked"];
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === "checked" && oldValue !== newValue) {
			this.checked = this.hasAttribute("checked");
		}
	}
}
