import "./style.css";
import { BoringButton } from "./components/BoringButton";
import { BoringToggle } from "./components/BoringToggle";
import { BoringSwitch } from "./components/BoringSwitch";
import { BoringToggleGroup } from "./components/BoringToggleGroup";
import { BoringToggleItem } from "./components/BoringToggleItem";
import { BoringCard } from "./panels/BoringCard";
import { BoringModal } from "./panels/BoringModal";
import { BoringCheckbox } from "./inputs/BoringCheckbox";
import { BoringRadio } from "./inputs/BoringRadio";
import { BoringRadioGroup } from "./inputs/BoringRadioGroup";
import { BoringTextbox } from "./inputs/BoringTextbox";
import { BoringSlider } from "./inputs/BoringSlider";

BoringButton;
BoringCard;
BoringCheckbox;
BoringModal;
BoringRadio;
BoringRadioGroup;
BoringSlider;
BoringSwitch;
BoringTextbox;
BoringToggle;
BoringToggleGroup;
BoringToggleItem;

customElements.define("boring-button", BoringButton);
customElements.define("boring-card", BoringCard);
customElements.define("boring-checkbox", BoringCheckbox);
customElements.define("boring-modal", BoringModal);
customElements.define("boring-radio", BoringRadio);
customElements.define("boring-radio-group", BoringRadioGroup);
customElements.define("boring-toggle", BoringToggle);
customElements.define("boring-switch", BoringSwitch);
customElements.define("boring-slider", BoringSlider);
customElements.define("boring-textbox", BoringTextbox);
customElements.define("boring-toggle-group", BoringToggleGroup);
customElements.define("boring-toggle-item", BoringToggleItem);
