import Button from './button';
import StateManager from './state-manager';

export default class AddButton extends Button {
  state: StateManager;
  list: HTMLElement;

  constructor(state: StateManager, list: HTMLElement) {
    super(state, 'Add');

    this.state = state;
    this.list = list;
    this.clickHandler();
  }

  clickHandler() {
    this.node.addEventListener('click', () => {
      this.list.append('test');
      this.state.addTask('test');
      this.state.saveState();
      console.log(this.state)
    });
  }
}
