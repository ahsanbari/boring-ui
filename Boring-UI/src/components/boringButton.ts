export enum buttonProps {
    color = 'color',
    backgroundColor = 'background-color',
    width = 'width',
    height = 'height',
    displayOrder = 'display-order',

}

export class BoringButton extends HTMLElement {
    public buttonStyle?: string;

    constructor() {
      super();
      
        this.buttonStyle = `button {
            display: flex;
            background-color: ${buttonProps.backgroundColor ?? 'purple'};
            color: ${buttonProps.backgroundColor ?? 'white'};
            width: ${buttonProps.width};
            height: ${buttonProps.height};
            justify-content: center;
            align-items: ${this.getDisplayOrder(buttonProps.displayOrder)};
        }`;

    }

    connectedCallback() {
        this.renderButton();
    }

    private renderButton(): void {
        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        shadow.appendChild(button);

        const slot = document.createElement('slot');
        slot.textContent = 'Nothing is slotted';
        button.appendChild(slot);

        const style = document.createElement('style');
        style.textContent = this.buttonStyle ?? '';
        shadow.appendChild(style);
    }


    getDisplayOrder(buttonProp: string): string {

        switch(buttonProp) {
            case('left'):
                return 'flex-start';
            case('right'):
                return 'flex-end';
            default:
                return 'center';
        }
    }


}


