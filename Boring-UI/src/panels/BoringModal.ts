import { designTokens } from "../tokens";

export class BoringModal extends HTMLElement {
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
				}

				boring-card header {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					margin: 0;
				}

				.close-button {
					visibility: hidden;
					opacity: 0;
					align-self: flex-start
					transition: ${designTokens.transition.transitionSpeed.faster};
				}
				boring-card header:hover > .close-button {
					visibility: visible;
					opacity: 1;
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
					<boring-button type="ghost" class="close-button">&times;</boring-button>
				</header>
				<div>
					<slot name="body"></slot>
				</div>
				<footer>
					<slot name="footer"></slot>
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
