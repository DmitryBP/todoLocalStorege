import BaseTag from './base-tag';
import StateManager from './state-manager';

export default class Button extends BaseTag {
  state: StateManager;
  
  constructor(state: StateManager, text: string) {
    super({ tag: 'button', className: ['button'], text: `${text}` })
    this.state = state  
  }
}
