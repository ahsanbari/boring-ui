import { designTokens } from "../tokens";


export enum ButtonType {
    Default = 'default',
    secondary = 'secondary',
    Ghost = 'ghost',
  }

export class BoringButton extends HTMLElement {

    public onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null = null;
  
    constructor() {
      super();
      const template = document.createElement('template');
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

        :host([type="default"]) button {
            background-color: ${designTokens.backgroundColor.default.primary};
            color: ${designTokens.text.textColor.primary};
        }
        :host([type="default"]) button:hover {
            background-color: ${designTokens.backgroundColor.default.secondary};
        }
        :host([type="default"]) button:active {
            background-color: ${designTokens.backgroundColor.default.tertiary};
        }


        :host([type="secondary"]) button {
            background-color: ${designTokens.backgroundColor.secondary.primary};
            color: ${designTokens.text.textColor.secondary};
            border: 2px solid ${designTokens.backgroundColor.default.primary};
        }
        :host([type="secondary"]) button:hover {
            background-color: ${designTokens.backgroundColor.secondary.secondary};
            border: 2px solid ${designTokens.backgroundColor.default.secondary};
        }
        :host([type="secondary"]) button:active {
            background-color: ${designTokens.backgroundColor.secondary.disabled};
            border: 2px solid ${designTokens.backgroundColor.default.disabled};
        }

        :host([type="ghost"]) button {
            background-color: ${designTokens.backgroundColor.ghost.primary};
            color: ${designTokens.text.textColor.secondary};
            border: none;
        }
        :host([type="ghost"]) button:hover {
            background-color: ${designTokens.backgroundColor.ghost.secondary};
        }
        :host([type="ghost"]) button:active {
            background-color: ${designTokens.backgroundColor.ghost.disabled};
        }
        </style>
        <button onclick=${this.onclick ?? this.defaultClickEvent()}>
            <slot></slot>
        </button>
      `;
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    public defaultClickEvent():void {
        console.log('made it');
    }

  }
  

  