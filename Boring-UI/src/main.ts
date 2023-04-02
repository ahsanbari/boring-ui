import './style.css';
import { BoringButton } from './components/BoringButton';
import { BoringToggle } from './components/BoringToggle';

BoringButton;
BoringToggle


customElements.define('boring-button', BoringButton);
customElements.define('boring-toggle', BoringToggle);