import Button from './button';
import StateManager from './state-manager';
import Task from './task';

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
      this.list.append(new Task(this.state, `#${this.state.id++}`).node);
      this.state.addTask({id: this.state.id});
      this.state.saveState();

      console.log(this.state);
    });
  }
}
