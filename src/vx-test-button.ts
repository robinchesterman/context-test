import { appContext } from './context';
import { consume } from '@lit/context';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('vx-test-button')
export class VxTestButton extends LitElement {

    @consume({ context: appContext, subscribe: true })
    private appContext?: { message: string}

    render() {
        return html`<button @click=${this.handleClick}>Click Me</button>`;
    }

    private handleClick() {
        console.log(this.appContext)
    }
}
