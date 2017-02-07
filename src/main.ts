import Application from '@glimmer/application';
import Resolver, {
  ResolverConfiguration,
  BasicModuleRegistry
} from '@glimmer/resolver';
import {
  RegistryAccessor
} from '@glimmer/di';
import config from './config/environment';
import moduleMap from './config/module-map';

const resolverConfiguration: ResolverConfiguration = {
  app: { name: config.modulePrefix, rootName: config.modulePrefix },
  types: config.moduleConfiguration.types,
  collections: config.moduleConfiguration.collections
};

console.log('resolverConfiguration', resolverConfiguration);
console.log('moduleMap', moduleMap);

export default class App extends Application {
  constructor() {
    let moduleRegistry = new BasicModuleRegistry(moduleMap);
    let resolver = new Resolver(resolverConfiguration, moduleRegistry);

    super({
      rootName: config.modulePrefix,
      resolver
    });
  }

  initialize(registry: RegistryAccessor) {
    super.initialize(registry);

    registry.register(`application:/${this.rootName}/main/main`, this, {
      instantiate: false
    });
    registry.registerInjection('runner', 'app', `application:/${this.rootName}/main/main`);
    registry.registerInjection('component', 'runner', `runner:/${this.rootName}/main/main`);
  }
}
