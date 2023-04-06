import { BoringCard } from "./BoringCard";

export class BoringModal extends BoringCard {
	constructor() {
		super();
	}

	private dismiss() {
		this.dispatchEvent(new Event("dismiss"));
	}
}
