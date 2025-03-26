export default class StateManager {
  key: string;
  state: string[];

  constructor() {
    this.state = this.loadState();
    this.key = 'tasks';
  }

  saveState() {
    localStorage.setItem(this.key, JSON.stringify(this.loadState()));
  }

  loadState() {
    const savedData = localStorage.getItem(this.key);
    return savedData ? JSON.parse(savedData) : [];
  }


  addTask(text: string) {
    this.state.push(text);
  }
}
