import BaseTag from './base-tag';
import StateManager from './state-manager';

export default class ListItem extends BaseTag {
  state: StateManager;

  constructor(state: StateManager, text: string) {
    super({ tag: 'li', className: ['list__item'], text: text });

    this.state = state;
  }
}
