import Task from './task';

export default class StateManager {
  key: string;
  state;
  id: number;

  constructor() {
    this.key = 'tasks';
    this.state = this.loadState();
    this.id = 0
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
      list.append(new Task(this, '#' + this.id++).node);
    });
    // localStorage.clear()
  }

  addTask(task) {
    this.state.push(task);
    this.saveState();
  }
}
