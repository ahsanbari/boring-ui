import './style.css';
import { BoringButton } from './components/BoringButton';
import { BoringToggle } from './components/BoringToggle';
import { BoringSwitch } from './components/BoringSwitch';

BoringButton;
BoringToggle;
BoringSwitch;


customElements.define('boring-button', BoringButton);
customElements.define('boring-toggle', BoringToggle);
customElements.define('boring-switch', BoringSwitch);