import Button from './button';
import StateManager from './state-manager';
import Task from './task';

export default class AddButton extends Button {
  state: StateManager;
  list: HTMLElement;
  id: number;

  constructor(state: StateManager, list: HTMLElement) {
    super(state, 'Add');

    this.state = state;
    this.list = list;
    this.clickHandler();
  }

  idCounter(){
    return this.id++;
  }

  clickHandler() {
    this.node.addEventListener('click', () => {
      this.list.append(new Task(this.state, `${1}`).node);
      this.state.addTask({ id: 1 });
      this.state.saveState();

      console.log(this.state);
    });
  }
}
