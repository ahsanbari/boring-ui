import './style.css';
import { BoringButton } from './components/BoringButton';
import { BoringToggle } from './components/BoringToggle';
import { BoringSwitch } from './components/BoringSwitch';
import { BoringToggleGroup } from './components/BoringToggleGroup';
import { BoringToggleItem } from './components/BoringToggleItem';

BoringButton;
BoringToggle;
BoringSwitch;
BoringToggleGroup;
BoringToggleItem


customElements.define('boring-button', BoringButton);
customElements.define('boring-toggle', BoringToggle);
customElements.define('boring-switch', BoringSwitch);
customElements.define('boring-toggle-group', BoringToggleGroup);
customElements.define('boring-toggle-item', BoringToggleItem);