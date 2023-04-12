import { designTokens } from "../tokens";

export enum modalSize {
	Large = "large",
	Small = "small",
}

export class BoringModal extends HTMLElement {
	public modalSize: modalSize = modalSize.Large;

	constructor() {
		super();

		const template: HTMLTemplateElement =
			document.createElement("template");
		template.innerHTML = `
		<style>
			:host {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				z-index: 9999;
			}

			boring-card {
				position: relative;
				display: flex;
				flex-direction: column;
				padding: 1rem .5rem;
			}

			boring-card header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin: 0;
			}

			boring-card header * {
				margin: 0;
				padding: 0;
			}

			.close-button-container {
				visibility: hidden;
				opacity: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: ${designTokens.transition.transitionSpeed.faster};
			}

			boring-card header:hover > .close-button-container {
				visibility: visible;
				opacity: 1;
			}

			boring-card ::slotted([slot="body"]) {
				display: flex;
				min-height: 80%;
				margin: 1rem 0;
				
				border-radius: ${designTokens.borderRadius.toggleGroup};
				width: 100%;

			}

			boring-card footer {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		</style>
		<boring-card>
			<header>
				<slot name="header"></slot>
				<div class="close-button-container">
					<boring-button type="ghost" class="close-button">&times;</boring-button>
				</div>
			</header>
			<div>
				<slot name="body"></slot>
			</div>
			<footer>
				<div>
					<slot name="footer"></slot>
				</div>
			</footer>
		</boring-card>
		`;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(template.content.cloneNode(true));

		const closeButton = shadowRoot.querySelector(
			".close-button"
		) as HTMLButtonElement;
		closeButton.addEventListener("click", () => {
			this.dismiss();
		});
	}

	private dismiss() {
		this.dispatchEvent(new Event("dismiss"));
		this.remove();
	}
}
