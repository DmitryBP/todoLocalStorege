import BaseTag from './base-tag';
import StateManager from './state-manager';

export default class Input extends BaseTag {
  state: StateManager;

  constructor(state: StateManager, placeholder: string) {
    super({ tag: 'input', className: ['input'], text: '' });
    this.state = state;

    this.node.setAttribute('placeholder', placeholder);
  }

  getValue(): string {
    return (this.node as HTMLInputElement).value;
  }

  setValue(value: string): void {
    (this.node as HTMLInputElement).value = value;
  }
}

