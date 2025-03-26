import DeleteButton from './delete-button';
import Input from './input';
import ListItem from './list-item';
import StateManager from './state-manager';
import TaskInput from './task-input';

export default class Task extends ListItem {
  input: Input;
  deleteButton: DeleteButton;

  constructor(state: StateManager, text: string) {
    super(state, text);

    this.input = new TaskInput(state);
    this.deleteButton = new DeleteButton(state);
    this.fillItem();
  }

  fillItem() {
    this.node.append(this.input.node, this.deleteButton.node);
  }
}
