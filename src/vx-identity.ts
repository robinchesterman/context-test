import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { provide} from '@lit/context';
import { appContext } from './context';

@customElement('vx-identity')
export class VLexIdentity extends LitElement {

  @provide({context: appContext})
  private appContext = { message : "hi" };

  public render() {
    console.log(this.appContext);
    return html`<slot></slot>`
  }
}

