import Button from './button';
import StateManager from './state-manager';

export default class DeleteButton extends Button {
  state: StateManager;

  constructor(state: StateManager) {
    super(state, 'del');
    
    this.state = state;
    this.clickHandler();
  }

  clickHandler() {
    this.node.addEventListener('click', () => {
      console.log('test');
    })
  }
}
