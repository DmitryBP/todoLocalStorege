import DeleteButton from './delete-button';
import Input from './input';
import ListItem from './list-item';
import StateManager from './state-manager';
import TaskInput from './task-input';

export default class Task extends ListItem {
  state: StateManager;
  input: Input;

  constructor(state: StateManager, text: string) {
    super(state, text);

    this.state = state;
    this.input = new TaskInput(this.state)
    this.fillItem();
  }

  fillItem() {
    const deleteButton = new DeleteButton(this.state).node;
    this.node.append(this.input.node, deleteButton);
  }
}
