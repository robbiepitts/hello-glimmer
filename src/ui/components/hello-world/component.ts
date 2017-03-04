import Component, {
  WebComponent
} from '@glimmer/component';
import app from '../../../main';

@WebComponent('hello-world', { 'data-name': '@name' }, app)
export default class HelloWorld extends Component {
  constructor(args) {
    console.log('HelloWorld constructor', args);
    super(args);
  }
};
