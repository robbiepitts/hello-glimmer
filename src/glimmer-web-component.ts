import App from './main';
import AttributesReference from './attributes-reference';
import { RenderResult } from '@glimmer/runtime';

export function register(componentName, klass): void {
  self.customElements.define(componentName, klass);
}

export default class GlimmerWebComponent extends HTMLElement {
  public observedAttributes: string[];
  protected componentName: string;
  protected app: App;
  protected root: RenderResult;

  connectedCallback() {
    let rootTemplateSpecifier = `${this.componentName}-wrapper`;
    let rootRef = new AttributesReference(this, this.observedAttributes);
    let rootElement = this;

    this.root = this.app.render({ rootTemplateSpecifier, rootRef, rootElement });
  }

  disconnectedCallback() {
    this.root.destroy();
  }

  attributeChangedCallback() {
    this.app.rerender();
  }
}
