import {
  UNDEFINED_REFERENCE
} from '@glimmer/runtime';
import {
  CONSTANT_TAG,
  CURRENT_TAG,
  DirtyableTag,
  PathReference,
  RevisionTag
} from '@glimmer/reference';

class AttributeReference implements PathReference<string> {
  public tag: RevisionTag = CONSTANT_TAG;

  constructor(private path: string, private val: string) {}

  value(): string {
    return this.val;
  }

  get(path: string): PathReference<string> {
    if (this.path === path) return this;

    return UNDEFINED_REFERENCE;
  }
}

export default class AttributesReference implements PathReference<Object> {
  public tag: DirtyableTag = CURRENT_TAG;

  constructor(private customElement: HTMLElement, private attributeNames: string[]) {}

  value(): Object {
    return this.attributeNames.reduce((memo, curr) => {
      memo[curr] = new AttributeReference(curr, this.customElement.getAttribute(curr));
      return memo;
    }, {});
  }

  get(path: string): AttributeReference {
    return new AttributeReference(path, this.customElement.getAttribute(path));
  }
}
