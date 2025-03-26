import Input from './input';
import StateManager from './state-manager';

export default class TaskInput extends Input {
  state: StateManager;

  constructor(state: StateManager ) {
    super(state, 'Task');
    this.state = state;
    this.changeHandler();
  }

  changeHandler() {
    this.node.addEventListener('change', () => {
      // this.state.editTask('test')
      this.setValue(''); 
    })
  }
}

