import App from './main';
import GlimmerWebComponent, {
  register
} from './glimmer-web-component';

const app = new App();
app.boot();

class HelloWorld extends GlimmerWebComponent {
  componentName = 'hello-world';
  observedAttributes = ['data-name'];
  app = app;
}

register('hello-world', HelloWorld);
