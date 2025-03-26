import Task from './task';

export default class StateManager {
  key: string;
  state;

  constructor() {
    this.key = 'tasks';
    this.state = this.loadState();
  }

  saveState() {
    localStorage.setItem(this.key, JSON.stringify(this.state));
  }

  loadState() {
    const savedData = localStorage.getItem(this.key);
    return savedData ? JSON.parse(savedData) : [];
  }

  update(list: HTMLElement) {
    this.state.forEach((savedTask) => {
      console.log(savedTask)
      list.append(new Task(this, '#').node);
    });
    // localStorage.clear()
  }

  addTask(task: {id: number}) {
    this.state.push(task);
    this.saveState();
  }
}
