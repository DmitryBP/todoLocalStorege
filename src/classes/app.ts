import AddButton from './addButton';
import BaseTag from './base-tag';
import StateManager from './state-manager';

export default class App {
  title: BaseTag;
  state: StateManager;
  addButton: AddButton;
  list: BaseTag;

  constructor() {
    this.state = new StateManager();
    this.title = new BaseTag({ tag: 'h1', className: ['title'], text: 'Todo' });
    this.list = new BaseTag({ tag: 'ul', className: ['list'], text: '' });
    this.addButton = new AddButton(this.state, this.list.node);
  }

  appInit() {
    console.log(this.state.loadState());
    
    this.state.update(this.list.node);

    document.body.append(this.title.node, this.list.node, this.addButton.node);
  }
}
